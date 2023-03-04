import { useEffect, useState } from "react";
import { Sizes } from "../../activityIndicator";
import "./style.css"
export const CheckBox = ({ defaultChecked, onChange, size,style, ...rest }) => {
    const [value, setValue] = useState(defaultChecked ? true : false)
    const onToggle = () => {
        setValue(!value)
    }
    useEffect(() => {
        if (onChange) {
            onChange(value)
        }
    }, [value])
    return (
        <div className="flex items-center gap-x-2">
            <div style={style} className={`custom-checkbox cursor-pointer ${size ? Sizes.find(e => e?.size === size)?.class : ""}`}>
                <input type="checkbox" checked={value} onChange={onToggle} {...rest} />
                <svg viewBox="0 0 35.6 35.6">
                    <circle className="background" cx="17.8" cy="17.8" r="17.8" />
                    <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87" />
                </svg>
            </div>
            <label className="text-sm font-medium text-gray-900 cursor-pointer" onClick={onToggle}>Check</label>
        </div>
    );
}