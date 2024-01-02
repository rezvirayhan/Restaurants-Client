import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../assets/home/slide1.jpg';
import img10 from '../../../assets/home/slide10.jpeg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import img6 from '../../../assets/home/slide6.jpg';
import img7 from '../../../assets/home/slide7.jpg';
import img8 from '../../../assets/home/slide8.jpg';
import img9 from '../../../assets/home/slide9.jpeg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Category.css';

const Category = () => {
    return (
        <section>
            <SectionTitle subHedding={'From 11:00am to 10:00pm'} hedding={"Order Online"}>

            </SectionTitle>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <img src={img1} />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={img2} />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={img3} />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={img4} />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={img5} />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={img6} />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={img7} />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={img8} />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={img9} />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={img10} />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;