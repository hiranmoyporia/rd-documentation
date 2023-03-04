import { Fragment, useEffect, useState } from "react";
import { Button } from "../button";

export const Carousel = ({ prev, next, images, name, container, imgContainer, imageStyle, indicator,controls }) => {
    const [activeSlide, setActiveSlide] = useState(0)
    const onPrev = () => {
        setActiveSlide(activeSlide === 0 ? images?.length - 1 : activeSlide - 1)
    }
    const onNext = () => {
        setActiveSlide(activeSlide === images?.length - 1 ? 0 : activeSlide + 1)
    }
    useEffect(() => {
        let id = `.${name}carouselChild`
        let nodes = document.querySelectorAll(id)
        for (let i = 0; i < nodes?.length; i++) {
            if (activeSlide === i) {
                nodes[i].classList.remove("hidden")
            }
            else {
                nodes[i].classList.add("hidden")
            }
        }
    }, [activeSlide])
    return (
        <div className="relative">
            <div className={`relative h-36 overflow-hidden rounded-lg md:h-96 ${container?.class ? container?.class : ""}`} style={container?.style}>
                {images && images instanceof Array && images?.length > 0 &&
                    images?.map((elem, index) => {
                        return (
                            <div key={index} className={`hidden ${name}carouselChild rounded-lg transition duration-700 ease-in-out ${imgContainer?.class ? imgContainer?.class : ""}`} style={imgContainer?.style}>
                                <img src={elem?.img} className="absolute block w-full rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={elem?.alt} style={imageStyle} />
                            </div>
                        );
                    })
                }
            </div>
            {indicator && <div style={indicator?.style} className={`absolute bg-gray-800 py-1.5 px-2.5 rounded-full z-30 flex items-center space-x-2.5 -translate-x-1/2 bottom-5 left-1/2 ${indicator?.class ? indicator?.class : ""}`}>
                {
                    images && images instanceof Array && images?.length > 0 &&
                    images?.map((elem, index) => {
                        return (
                            <button key={index} onClick={() => { setActiveSlide(index) }} type="button" className={`${activeSlide === index ? "scale-150" : "scale-100"} w-2 h-2 bg-white rounded-full transition duration-700 ease-in-out`} />
                        );
                    })
                }
            </div>}
            {controls&&<Fragment>
            {
                prev ? prev(onPrev) :
                    <div className={"absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"}>
                        <Button onClick={onPrev} rounded="full" onlyIcon={() => {
                            return (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                                </svg>
                            )
                        }} type="dark" />
                    </div>
            }
            {
                next ? next(onNext) :
                    <div className={"absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"}>
                        <Button onClick={onNext} rounded="full" onlyIcon={() => {
                            return (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            )
                        }} type="dark" />
                    </div>
            }
            </Fragment>}
        </div>
    );
}