import React, { useRef, useEffect } from 'react';
import "./header.css";
// import Scene from './scene';
import { Link } from "react-router-dom";
import dragon from "../../assets/dragon.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Dragonbricks</h1>
        <p>Find your community of LEGO lovers!</p>

        <div className="gpt3__header-content__input">
          <button type="button">
            <Link to="/Catalogue">Get Started</Link>
          </button>
        </div>
      </div>
      <div className="gpt3__header-image">
        {/* <div className="scene-container">
          <Scene />
        </div> */}
        <img src={dragon} alt = ""/>
      </div>
    </div>
  );
};



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


