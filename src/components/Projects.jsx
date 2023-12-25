import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import lmaoImage from './src/assets/images/lmao.png';
import './index.css'; // Import the index.css file

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // Track component visibility
  const sectionRef = useRef(null);

  const openModal = (projectIndex) => {
    setSelectedProject(projectIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const projectsCount = 3;

  return (
    <section
      ref={sectionRef}
      className={`bg-bg_light_primary ${isVisible ? 'fade-in' : ''}`}
      id="projects"
      data-aos="fade-up"
    >
      {/* The rest of your component code remains unchanged */}
    </section>
  );
};

export default Projects;
