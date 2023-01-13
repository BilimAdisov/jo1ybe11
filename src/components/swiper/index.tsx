import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const SwiperSlider = ({newItem}:any) => {
  return (
    <>
    {
        newItem.map((elem:any) => (
            <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={100}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => ''}
            onSlideChange={() => ''}
            style={{textAlign: 'center', maxHeight: '540px', maxWidth: '705px'}}
            key={elem.id}
            >
                <SwiperSlide>
                    <img src={elem.image1} alt="" style={{width: 'auto', maxHeight: '540px'}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={elem.image2} alt="" style={{ width: 'auto', maxHeight: '540px'}}/>
                </SwiperSlide>
            </Swiper>
        ))
    }
    </>
  )
}