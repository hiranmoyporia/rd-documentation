import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const Dropdown = ({ buttonComp, hover, children, menuContainer,currentState }) => {
    const [status, setStatus] = useState(false)
    const [rect, setRect] = useState()
    const [width, setWidth] = useState(window.innerWidth);
    const onClick = () => {
        setStatus(!status)
    }
    const ref = useRef(null)
    useLayoutEffect(() => {
        setRect(ref.current.getBoundingClientRect())
    }, [ref.current])
    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
        };
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, []);
    useEffect(()=>{
        currentState(status)
    },[status])
    return (
        <span ref={ref} className={`relative ${hover ? "dropdown" : ""}`}>
            {
                buttonComp && buttonComp(onClick)
            }
            <div style={menuContainer?.style} className={`dropdown-menu z-10 ${status ? "" : "hidden"} ${rect?.right + 100 > width ? "right-0" : "left-0"} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${menuContainer?.class ? menuContainer?.class : ""}`}>
                {children ? children : null}
            </div>
        </span>
    );
}