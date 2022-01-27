import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisibility] = useState(false);

    useEffect(()=>{
        if(pageYOffset > 400){
            setVisibility(true)
        }else{
            setVisibility(false)
        }
    })

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"})

    if(!visible){
        return false;
    }

    return (

        <div className="scroll-to-top" onClick={scrollToTop}>
            <img data-aos="fade-up" data-aos-delay="120"  src='images/seta.png' width='40' height="auto"/>
        </div>
    )
}

AOS.init();

export default ScrollToTop

