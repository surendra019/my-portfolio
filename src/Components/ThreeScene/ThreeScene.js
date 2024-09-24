import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ThreeScene.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const InfiniteStarsAnimation = () => {
    const mountRef = useRef(null);
    // let ref;

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight );
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000);
        
        mountRef.current.appendChild(renderer.domElement);
    
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
    
        const starsGroup = new THREE.Group();
        scene.add(starsGroup);
    
        function addStar() {
            const geometry = new THREE.SphereGeometry(0.1, 24, 24);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);
    
            const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));
            star.position.set(x, y, z);
            starsGroup.add(star);
        }
    
        Array(500).fill().forEach(addStar);
        camera.position.z = 5;
    
        const animate = () => {
            requestAnimationFrame(animate);
    
            starsGroup.children.forEach((star) => {
                star.position.z += 0.1;
    
                if (star.position.z > camera.position.z) {
                    star.position.z = THREE.MathUtils.randFloat(-200, -100);
                }
            });
    
            controls.update();
            renderer.render(scene, camera);
        };
    
        animate();
    
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, [])

    return <div className='main-container' ref={mountRef} />;
};

export default InfiniteStarsAnimation;
