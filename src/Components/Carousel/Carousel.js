import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css'; // Ensure to create a CSS file for styling

const Carousel = ({ items, autoSlideInterval = 5000, project }) => {
    const path = process.env.PUBLIC_URL + project.type.charAt(0).toUpperCase() + project.type.slice(1) + "/" + project.title + "/";
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    const videoRef = useRef(null);

    const handlePrevClick = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNextClick = () => {
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const videoElement = videoRef.current;

        if (items[currentIndex].type === 'video') {
            if (videoElement) {
                videoElement.muted = true;
                videoElement.play().catch((error) => console.error('Error playing video:', error));

                const onEnded = () => handleNextClick();
                videoElement.addEventListener('ended', onEnded);

                return () => {
                    videoElement.removeEventListener('ended', onEnded);
                    videoElement.pause();
                };
            }
        } else {
            intervalRef.current = setInterval(() => {
                handleNextClick();
            }, autoSlideInterval);

            return () => {
                clearInterval(intervalRef.current);
            };
        }
    }, [currentIndex, items, autoSlideInterval]);
   
    return (
        <div className="carousel">
            <button onClick={handlePrevClick} className="carousel-button prev">❮</button>
            <div className="carousel-content">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                    >
                        {item.type === 'image' ? (
                            <img src={path + item.src} alt={item.src || `Slide ${index}`} />
                        ) : item.type === 'video' ? (
                            <video ref={videoRef} controls>
                                <source src={path + item.src} type={'video/mp4'} />
                                Your browser does not support the video tag.
                            </video>
                        ) : null}
                    </div>
                ))}
            </div>
            <button onClick={handleNextClick} className="carousel-button next">❯</button>
        </div>
    );
};

export default Carousel;
