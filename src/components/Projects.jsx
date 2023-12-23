import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projectIndex) => {
    setSelectedProject(projectIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const projectsCount = 3; // Change this to the number of slides you want

  // Dynamic import for Spline
  const Spline = React.lazy(() => import('@splinetool/react-spline'));

  return (
    <section className="bg-bg_light_primary" id="projects">
      {/* rest of the component */}
      {/* ... */}

      {selectedProject !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              width: '80%',
              height: '80%',
              padding: '20px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Mini Keyboard</h2>
            <p>
              This is a keyboard model made in the Spline 3D model workshop that is integrated fully
              into this react website.
            </p>
            <React.Suspense fallback={<div>Loading...</div>}>
              <div style={{ width: '100%', height: '100%' }}>
                <Spline
                  scene="https://prod.spline.design/VaWzQnJylRSKhxe8/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </React.Suspense>
            <div className="absolute bottom-0 right-0 p-4">
              <p>
                This is a keyboard model made in the Spline 3D model workshop that is integrated
                fully into this react website.
              </p>
            </div>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '24px', fontWeight: 'bold' }}>X</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
