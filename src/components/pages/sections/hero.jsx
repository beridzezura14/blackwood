import gsap from 'gsap'
// import { useEffect } from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../../assets/img/hero1.jpeg'
import hero2 from '../../../assets/img/hero2.jpg'
import hero3 from '../../../assets/img/slider-2.jpg'

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


function Hero() {

    // const textRefs = useRef([]);

    // useEffect(() => {
    //     // ანიმაცია თითოეული სლაიდისთვის
    //     gsap.fromTo(".fade",
    //       { opacity: 0, x: -150 },
    //       { opacity: 1, x: 0, duration: 1, stagger: 0.2 }
    //     );
    // }, []);


    const slider = {
        dots: false, 
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 7000, 
        beforeChange: () => {
            // ანიმაცია სლაიდის ცვლილებაზე
            gsap.fromTo('.fade',
              { opacity: 0, y: 150, stagger: .1, ease: "power1.in"},
              { opacity: 1, y: 0, duration: 1, stagger: .1, ease: "power1.in"}
            );
            // gsap.fromTo('.btn', 
            //   { delay: 1, opacity: 0, },
            //   { delay: 1, opacity: 1, duration: 1}
            // )
          },
    };
    


    return (
        <div className='main__hero'>

            <Slider {...slider}>
                    {
                        heroList.map((item) => (
                            <div  key={item.id}> 
                                <div className="hero" style={{
                                    backgroundImage: `linear-gradient(#0000009a, #000000c9),
                                    url(${item.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}>
                                    <div  className='hero__text'>
                                        <div className='overflow'>
                                            <h1 className="fade">{item.name}</h1>
                                        </div>
                                        <div className='overflow'>
                                            <p className="fade">{item.para}</p>
                                        </div>
                                        <div className='overflow'>
                                            <button className='btn fade'>Details</button>    
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>

        </div>
    )
    
}

export default Hero
