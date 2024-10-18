import table from '../../../assets/img/category/category-3.jpg'
import lamp from '../../../assets/img/category/category-4.jpg'
import chair from '../../../assets/img/category/category-6.jpg'
import clock from '../../../assets/img/category/category-1.jpg'
import other from '../../../assets/img/category/category-2.jpg'
import { Swiper, SwiperSlide } from "swiper/react"; // იმპორტირება
import "swiper/swiper-bundle.css"
import { useRef } from 'react'

const categoryList = [
    {
        id: 1,
        img: table,
        name: "Table"
    },
    {
        id: 2,
        img: lamp,
        name: "Lamp"
    },
    {
        id: 3,
        img: chair,
        name: "Chair"
    },
    {
        id: 4,
        img: clock,
        name: "Clock"
    },
    {
        id: 5,
        img: other,
        name: "Other"
    }

]

function Category() {
    const swiperRef = useRef(null);
    return (
        <div className='main__catecory'>


            <div className='category'>
                <div className='section__name'>
                    <h1>1. Category</h1>
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
                            640: {
                                slidesPerView: 2, // 640px-ზე მეტი სიგანეზე ორი სლაიდი
                            },
                            768: {
                                slidesPerView: 2, // 768px-ზე მეტი სიგანეზე სამი სლაიდი
                            },  
                            1024: {
                                slidesPerView: 4, // 1024px-ზე მეტი სიგანეზე სამი სლაიდი
                            }, 
                        }}
                    >
                    <div>
                        {
                            categoryList.map(item => (
                                <SwiperSlide className='category__item' key={item.id}>
                                    <img src={item.img} alt={item.name} />
                                    <h2 className='item__name'>{item.name}</h2>
                                    <p>(20)</p>
                                </SwiperSlide>
                            ))
                        }
                    </div>
                    
                </Swiper>
            </div>
        </div>
    )
}

export default Category
