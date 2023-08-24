import { FaAndroid, FaApple } from "react-icons/fa6"
import slider1Img from "/slider1.png"
import { useEffect, useRef } from "react"

import { gsap } from "gsap";

export default function ImageSlider() {
    const sliderRef = useRef();
    var startX = 0, sliderItemWidth = 1000;

    useEffect(() => {
        window.addEventListener("mousedown", handleMouseDown)
        sliderItemWidth = document.getElementsByClassName("slider_item")[0].clientWidth;
        
        return () => {
            window.removeEventListener("mousedown", handleMouseDown)
        }
    }, [])

    function handleMouseMove(e) {
        let posX = e.pageX - sliderRef.current.offsetLeft - startX;
        if(posX > 0) {
            gsap.to("#slider", {"--position-x": 0 + "px"})
        } else if (posX < -sliderItemWidth * (document.getElementsByClassName("slider_item").length - 1)) {

        } else {
            console.log("Blocking")
            gsap.to("#slider", {"--position-x": posX + "px"})
        }
    }
    function handleMouseUp(e) {
        window.removeEventListener("mousemove", handleMouseMove)

        let sliderPosX = parseInt(sliderRef.current.style.getPropertyValue("--position-x")) || 0;

        gsap.to("#slider", {"--position-x": Math.round(sliderPosX / sliderItemWidth) * sliderItemWidth + "px"});

    }
    function handleMouseDown(e) {
        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseup", handleMouseUp)
        let currentPosition = parseInt(sliderRef.current.style.getPropertyValue("--position-x")) || 0;
        startX = e.pageX - sliderRef.current.offsetLeft - currentPosition;
    }
    return (
        <div id="slider_wrapper">
            <div ref={sliderRef} id="slider">
                <div className="slider_item">
                    <div className="left">
                        <h1><FaApple /></h1>
                        <h1>HUGE DISCOUNTS</h1>
                    </div>
                    <img draggable={false} src={slider1Img} alt="" />
                </div>
                <div className="slider_item">
                    <div className="left">
                        <h1><FaAndroid /></h1>
                        <h1>Second Page</h1>
                    </div>
                    <img draggable={false} src={slider1Img} alt="" />
                </div>
            </div>
        </div>
    )
};
