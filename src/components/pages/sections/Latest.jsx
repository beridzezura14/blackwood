import { useRef } from "react";
import { productList } from "../../AllProduct";
import { Swiper, SwiperSlide } from "swiper/react"; // იმპორტირება
import "swiper/swiper-bundle.css"


function Latest() {
    const swiperRef = useRef(null);
    return (
        <div className='main__sale main__latest'>


            <div className='sale'>
                <div className='section__name'>
                    <h1>3. Latest </h1>
                    <div className='arr'>
                        <button onClick={() => swiperRef.current.slidePrev()}>&#10229;</button>
                        <button onClick={() => swiperRef.current.slideNext()}>&#10230;</button>
                    </div>
                </div>

            <Swiper spaceBetween={30} // სლაიდებს შორის დაშორება
                    slidesPerView={1} // მობილური ვერსიაზე ერთი სლაიდი
                    navigation // ნავიგაციის ღილაკები
                    pagination={{ clickable: true }} // პაგინაციის ღილაკები
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    breakpoints={{
                        // 640: {
                        //     slidesPerView: 2, // 640px-ზე მეტი სიგანეზე ორი სლაიდი
                        // },
                        // 768: {
                        //     slidesPerView: 2, // 768px-ზე მეტი სიგანეზე სამი სლაიდი
                        // },  
                        1024: {
                            slidesPerView: 2, // 1024px-ზე მეტი სიგანეზე სამი სლაიდი
                        }, 
                    }}
                >
                <div>
                    {
                        productList.slice(0, 4).map(item => (
                            <SwiperSlide className= 'sale__item' key={item.id}>

                                <div className="sale__content">
                                    <div className="img__timer">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="sale__item__text">
                                        <h4>{item.name}</h4>
                                        <div className="price">
                                            <p>{item.price}.00 $</p>
                                                {
                                                    item.discount ? <p className='discount'>{item.oldPrice}.00 $</p> : " "
                                                }
                                        </div>
                                        <button className='find__btn__item'>Details</button>

                                        <div className="similar"></div>
                                    </div>
                                </div>  
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper>
            </div>
        </div>
    )
}

export default Latest
