import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './scene.gltf'

const Scene = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, controls, car;

    function init() {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xdddddd);

      camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
      camera.rotation.y = 45 / 180 * Math.PI;
      camera.position.x = 800;
      camera.position.y = 100;
      camera.position.z = 1000;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      const container = sceneRef.current;
      container.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.addEventListener('change', render);

      const hlight = new THREE.AmbientLight(0x404040, 100);
      scene.add(hlight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
      directionalLight.position.set(0, 1, 0);
      directionalLight.castShadow = true;
      scene.add(directionalLight);

      const light = new THREE.PointLight(0xc4c4c4, 10);
      light.position.set(0, 300, 500);
      scene.add(light);

      const light2 = new THREE.PointLight(0xc4c4c4, 10);
      light2.position.set(500, 100, 0);
      scene.add(light2);

      const light3 = new THREE.PointLight(0xc4c4c4, 10);
      light3.position.set(0, 100, -500);
      scene.add(light3);

      const light4 = new THREE.PointLight(0xc4c4c4, 10);
      light4.position.set(-500, 300, 500);
      scene.add(light4);

      const loader = new GLTFLoader();
      loader.load('scene.gltf', function (gltf) {
        car = gltf.scene.children[0];
        car.scale.set(0.5, 0.5, 0.5);
        scene.add(gltf.scene);
        animate();
      });
    }

    function animate() {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    function render() {
      renderer.render(scene, camera);
    }

    if (sceneRef.current) {
      init();
    }

    return () => {
      // Clean up the scene and remove event listeners if needed
      const container = sceneRef.current;
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div id="scene" ref={sceneRef} />;
};

export default Scene;


