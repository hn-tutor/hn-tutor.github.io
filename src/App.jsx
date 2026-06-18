import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import content from './data/contentData.json';

// Import các file thành phần giao diện
import Navbar from './components/Navbar';
import HeroSlide from './components/slides/HeroSlide';
import SplitsSlide from './components/slides/SplitsSlide';
import BentoMetrics from './components/slides/BentoMetrics';
import ShowcasesSlide from './components/slides/ShowcasesSlide';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray('.slide-section');
    
    // Hiệu ứng cuộn snap mượt mà từng Slide kiểu tạp chí cao cấp
    gsap.to(sections, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        snap: 1 / (sections.length - 1),
      }
    });

    // Hiệu ứng ánh đèn nền Glow mờ ảo chuyển động ngẫu nhiên tăng độ High-tech
    gsap.to(".bg-glow", {
      duration: 10,
      x: 'random(-100, 100)',
      y: 'random(-100, 100)',
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  // Bộ máy tự động nhận diện dữ liệu JSON để xuất ra đúng mẫu khung xương Layout
  const renderSlide = (slide) => {
    switch (slide.layout) {
      case 'hero':
      case 'hero-center':
        return <HeroSlide data={slide} profile={content.profile} />;
      case 'split':
      case 'split-a':
      case 'split-b':
        return <SplitsSlide data={slide} />;
      case 'bento-skills':
      case 'bento-metrics':
      case 'bento-roadmap':
        return <BentoMetrics data={slide} />;
      case 'adaptive-showcase':
        return <ShowcasesSlide data={slide} />;
      default:
        return <HeroSlide data={slide} profile={content.profile} />;
    }
  };

  return (
    <div ref={containerRef} className="bg-obsidian text-white font-inter overflow-x-hidden min-h-screen relative">
      {/* Các lớp đèn hiệu ứng nền Depth 3D */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="bg-glow absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-cyan-tech/5 blur-[120px] rounded-full" />
        <div className="bg-glow absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vh] bg-indigo-premium/5 blur-[120px] rounded-full" />
      </div>

      <Navbar profile={content.profile} />

      <main className="relative z-10">
        {content.slides.map((slide) => (
          <section key={slide.id} className="slide-section h-screen w-full relative border-b border-white/5 flex items-center justify-center font-jakarta">
            {renderSlide(slide)}
          </section>
        ))}
      </main>
    </div>
  );
};

export default App;