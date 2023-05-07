import React, { useRef, useEffect } from 'react';
import "./header.css"
import ai from '../../assets/ai.png';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three-gltf-loader';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


const 
Header = () => {
  return (
    <div className = "gpt3__header section__padding" id = "home">
      <div className = "gpt3__header-content">
        <h1 className = "gradient__text">Dragonbricks </h1>
        <p>
          Find your community of lego lovers!
        </p>

        <div className="gpt3__header-content__input">
          {/* <input type="email" placeholder="Your Email Address" /> */}
          <button type="button">Get Started</button>
        </div>
        {/* <div className="gpt3__header-content__people">
          <img src={people} alt = ""/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div> */}
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt = ""/>
      </div>
    </div>
  )
}

// const Header = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });

//     renderer.setSize(container.clientWidth, container.clientHeight);
//     container.appendChild(renderer.domElement);

//     const loader = new GLTFLoader();
//     loader.load('./src/assets/Lego20Empire20State20Building.gltf', (gltf) => { 
//       scene.add(gltf.scene);
//     });

//     const light = new THREE.AmbientLight(0xffffff, 1);
//     scene.add(light);

//     camera.position.z = 5;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       renderer.dispose();
//       container.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div ref={containerRef} />
//   );
// };


export default 
Header


