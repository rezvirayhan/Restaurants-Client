import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { useEffect, useRef, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Testimonials.css';
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <section>
            <SectionTitle subHedding={"What Our Client Say"} hedding={"Testimonials"}></SectionTitle>
            <div>
                <>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        {
                            reviews.map(review => <SwiperSlide
                                key={review._id}
                            >
                                <div className="mt-4 p-8">
                                    <center>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
                                            readOnly
                                        />
                                    </center>
                                    <p>{review.details}</p>
                                    <h2 className="text-2xl text-orange-600"> {review.name}</h2>
                                </div>
                            </SwiperSlide>)
                        }

                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </>
            </div>
        </section>
    );
};

export default Testimonials;