import { Fragment, useState } from "react";
import { ButtonSizes, ButtonTypes } from "../button";

export const List = ({ data, container, type, size, activeColor,borderLess }) => {
    const [activeItem, setActiveItem] = useState(0)
    const onItemClick = (index) => {
        setActiveItem(index)
    }
    return (
        <ul className={`w-48 overflow-hidden ${container?.class ? container?.class : ""}`} style={container?.style}>
            {
                data && data instanceof Array && data?.length > 0 &&
                data?.map((elem, index) => {
                    return (
                        <Fragment key={index}>
                            {
                                typeof elem?.item === "function" ?
                                    elem?.item() :
                                    <li onClick={() => { if (elem?.onClick) { elem?.onClick(index); onItemClick(index) } }} className={`${size ? ButtonSizes.find(e => e?.size === size)?.class : ButtonSizes.find(e => e?.size === "md")?.class} ${type ? ButtonTypes.find(e => e?.type === type)?.class : ""} flex items-center gap-x-2 cursor-pointer ${elem?.rightIcon ? "justify-between" : ""} ${index < data?.length - 1 && !borderLess ? "border-b" : ""} ${(activeColor && activeItem === index) ? ButtonTypes.find(e => e?.type === type)?.active : ""}`}>
                                        {elem?.leftIcon && elem?.leftIcon()}
                                        {elem?.item && elem?.item}
                                        {elem?.rightIcon && elem?.rightIcon()}
                                    </li>
                            }
                        </Fragment>
                    );
                })
            }
        </ul >
    );
}