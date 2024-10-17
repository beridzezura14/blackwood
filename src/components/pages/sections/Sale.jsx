import { Swiper, SwiperSlide } from "swiper/react"; // იმპორტირება
import "swiper/swiper-bundle.css"
import sale from '../../../assets/img/sale.png'

import { useRef, useEffect, useState, useMemo  } from 'react';

import { productList } from "../../AllProduct";

function Sale() {
    const swiperRef = useRef(null);
    const targetDate = useMemo(() => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), []);

    const [timeLeft, setTimeLeft] = useState(targetDate - new Date());

    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    useEffect(() => {
        const interval = setInterval(() => {
          const currentTime = new Date();
          const distance = targetDate - currentTime;
          setTimeLeft(distance);
    
          // როდესაც დრო დასრულდება, გაჩერდე ინტერვალი
          if (distance <= 0) {
            clearInterval(interval);
            setTimeLeft(0);
          }
        }, 1000);
    
        return () => clearInterval(interval); // კომპონენტის განადგურებისას გაჩერდეს ინტერვალი
    }, [targetDate]);


    // console.log(hours.toString().length)
    return (
        <div className='main__sale'>


            <div className='sale'>
                <div className='section__name'>
                    <h1>2. Sale </h1>
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
                >
                <div>
                    {
                        productList.map(item => (
                            <SwiperSlide className={item.discount ? 'sale__item' : "none" } key={item.id}>

                                <div>
                                    <div className="img__timer">
                                        <img className="sale" src={sale} alt="sale" />
                                        <img src={item.img} alt="" />
                                        <div className="timer">{days}&nbsp; : &nbsp;
                                        {
                                            hours.toString().length < 2 ? "0" + hours : hours
                                        } &nbsp; : &nbsp;
                                        {
                                            minutes.toString().length < 2 ? "0" + minutes : minutes
                                        }&nbsp; : &nbsp;
                                        {
                                            seconds.toString().length < 2 ? "0" + seconds : seconds
                                        }
                                        </div>

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


export default Sale
