import { Navigation, Pagination, A11y, Parallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax'

export const SwiperSlider = ({newItem}:any) => {
  return (
    <>
    {
        newItem.map((elem:any) => (
            <Swiper
            modules={[Navigation, Pagination, A11y, Parallax]}
            spaceBetween={100}
            speed={500}
            slidesPerView={1}
            parallax
            navigation
            pagination={{ clickable: true}}
            onSwiper={(swiper) => ''}
            onSlideChange={() => ''}
            style={{textAlign: 'center',}}
            key={elem.id}
            >
                <SwiperSlide data-swiper-parallax-opacity="0.5">
                    <img src={elem.image1} alt="" style={{width: 'auto', maxHeight: '540px'}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={elem.image2} alt="" style={{ width: 'auto', maxHeight: '540px'}} />
                </SwiperSlide>
            </Swiper>
        ))
    }
    </>
  )
}
