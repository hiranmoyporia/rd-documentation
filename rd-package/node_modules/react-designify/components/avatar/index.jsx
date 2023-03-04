import { Fragment } from "react";

export const Avatar = ({ src, alt, type, size, style, icon, text, textStyle, onClick }) => {
    return (
        <Fragment>
            {src && <img
                onClick={onClick}
                className={`${onClick ? "cursor-pointer" : ""} ${type ? AvatarTypes.find(e => e?.type === type)?.class : ""} ${size ? AvatarSizes.find(e => e?.size === size)?.class : ""}`}
                src={src}
                alt={alt}
                style={style}
            />}
            {icon && <div onClick={onClick} style={style} className={`${onClick ? "cursor-pointer" : ""} flex items-center justify-center p-2 bg-gray-100 ${type ? AvatarTypes.find(e => e?.type === type)?.class : ""} ${size ? AvatarSizes.find(e => e?.size === size)?.class : ""}`}>
                {icon()}
            </div>}
            {text && <div onClick={onClick} style={style} className={`${onClick ? "cursor-pointer" : ""} flex items-center justify-center p-2 bg-gray-100 overflow-hidden ${type ? AvatarTypes.find(e => e?.type === type)?.class : ""} ${size ? AvatarSizes.find(e => e?.size === size)?.class : ""}`}>
                <span style={textStyle} className="font-medium text-gray-600">{text}</span>
            </div>}
        </Fragment>
    );
}

const AvatarTypes = [
    {
        "type": "circle",
        "class": "rounded-full"
    },
    {
        "type": "square",
        "class": "rounded"
    },
]
const AvatarSizes = [
    {
        "size": "xs",
        "class": "w-6 h-6"
    },
    {
        "size": "sm",
        "class": "w-8 h-8"
    },
    {
        "size": "md",
        "class": "w-10 h-10"
    },
    {
        "size": "lg",
        "class": "w-20 h-20"
    },
    {
        "size": "xl",
        "class": "w-36 h-36"
    }
]