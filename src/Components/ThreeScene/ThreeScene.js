import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ThreeScene.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const InfiniteStarsAnimation = () => {
    const mountRef = useRef(null);
    let ref;

    useEffect(() => {
        // Set up the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000); // Black background
        mountRef.current.appendChild(renderer.domElement);

        // OrbitControls to allow rotating the scene
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // Create a group to hold the stars
        const starsGroup = new THREE.Group();
        scene.add(starsGroup);

        // Function to add stars
        function addStar() {
            const geometry = new THREE.SphereGeometry(0.1, 24, 24);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);

            // Set random position for each star
            const [x, y, z] = Array(3)
                .fill()
                .map(() => THREE.MathUtils.randFloatSpread(200));

            star.position.set(x, y, z);
            starsGroup.add(star);
        }

        // Create a bunch of stars
        Array(500).fill().forEach(addStar);

        // Set the camera position
        camera.position.z = 5;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Move stars towards the camera to create the zoom-in effect
            starsGroup.children.forEach((star) => {
                star.position.z += 0.1; // Adjust speed by changing the value

                // Reset star position when it passes the camera
                if (star.position.z > camera.position.z) {
                    star.position.z = THREE.MathUtils.randFloat(-200, -100);
                }
            });

            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);




        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }

        };
    }, []);

    useEffect(() => {
        ref = mountRef.current;
    })

    return <div className='main-container' ref={mountRef} />;
};

export default InfiniteStarsAnimation;
