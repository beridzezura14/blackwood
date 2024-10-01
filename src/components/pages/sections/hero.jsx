
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../../assets/img/hero1.jpeg'
import hero2 from '../../../assets/img/hero2.jpg'
import hero3 from '../../../assets/img/slider-2.jpg'



function hero() {

    const heroList = [
        {
            id: 1,
            img: hero1,
            name: "Living Room",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reiciendis quae sunt sapiente sed minus quasi perferendis ea provident quis.",
        },
        {
            id: 2,
            img: hero2,
            name: "Office Area",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reiciendis quae sunt sapiente sed minus quasi perferendis ea provident quis.",
        },
        {
            id: 3,
            img: hero3,
            name: "Hottel Part",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reiciendis quae sunt sapiente sed minus quasi perferendis ea provident quis.",
        },
    ]


    

    const slider = {
        dots: false, // ქვემოთ წერტილების ჩვენება
        arrows: true,
        infinite: true, // უსასრულო სლაიდინგი
        speed: 500, // სლაიდინგის სიჩქარე მილიწამებში
        slidesToShow: 1, // რამდენი სლაიდი გამოჩნდება ერთდროულად
        slidesToScroll: 1, // რამდენი სლაიდი გადაიშლება ერთხელ
        autoplay: true, // ავტომატური სლაიდინგი
        autoplaySpeed: 5000, // ავტომატური სლაიდინგის სიჩქარე
      };
    
    return (
        <div className='main__hero'>

            <Slider {...slider}>
                    {
                        heroList.map((item) => (
                            <div key={item.id}> 
                                <div style={{
                                    height: "80dvh",
                                    width: "100%",
                                    backgroundColor: "grey",
                                }}>
                                    <div className='hero__text'>
                                        <h1>{item.name}</h1>
                                        <p>{item.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>

        </div>

    )
}

export default hero
