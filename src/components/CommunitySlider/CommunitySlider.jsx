import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'animate.css';

const CommunitySlider = () => {
  const swiperRef = useRef(null);
  const communities = [
    { name: 'Downtown Dubai', link: '/downtown-dubai' },
    { name: 'Business Bay', link: '/business-bay' },
    { name: 'Dubai Marina', link: '/dubai-marina' },
    { name: 'Dubai Creek Harbour', link: '/dubai-creek' },
    { name: 'Dubai Hills Estate', link: '/dubai-hills' },
    { name: 'Emirates Living', link: '/emirates-living' },
    { name: 'Jumeirah Village Circle', link: '/jvc' },
    { name: 'Jumeirah Village Triangle', link: '/jvt' }
  ];

  return (
    <div className="w-full bg-gray-50 relative">
      <div className="max-w-7xl mx-auto relative px-10">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
          modules={[Navigation]}
          className="w-full"
        >
          {communities.map((community, index) => (
            <SwiperSlide key={index}>
              <Link
                to={community.link}
                className="block p-6 text-center text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 animate__animated animate__fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-xl shadow-md border border-gray-300 px-6 py-3 h-full flex items-center justify-center">
                  <span className="animate__animated animate__fadeInUp text-sm font-medium">
                    {community.name}
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons with React Icons */}
        <button 
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hover:bg-red-600 p-3  rounded-full shadow-md bg-red-700 transition-colors cursor-pointer"
        >
          <FiChevronLeft className="h-5 w-5 text-white" />
        </button>
        <button 
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hover:bg-red-600 p-3 rounded-full shadow-md bg-red-700 transition-colors cursor-pointer"
        >
          <FiChevronRight className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default CommunitySlider;