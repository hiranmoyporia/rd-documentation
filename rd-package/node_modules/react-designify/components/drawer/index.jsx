import { useEffect } from "react";
import { Button } from "../button";

export const Drawer = ({ open, onClose, dir, style, className, children, overlayColor }) => {
    useEffect(() => {
        if (open) {
            if (!document.getElementById("drawerWrapper")) {
                var div = document.createElement("div")
                div.id = "drawerWrapper"
                div.classList.add("fixed", "top-0", "right-0", "bottom-0", "left-0", "z-30", "cursor-pointer", "transition", "duration-150", "ease-in-out")
                div.style.backgroundColor = overlayColor ? overlayColor : "rgba(0,0,0,0.5)"
                div.addEventListener("click", () => {
                    onClose(true)
                })
                document.body.append(div)
            }
        }
        else {
            if (document.getElementById("drawerWrapper")) {
                document.getElementById("drawerWrapper").remove()
            }
        }
    }, [open, overlayColor])
    return (
        <div style={style} className={`bg-gray-800 p-3 text-white fixed overflow-y-auto ${dir ? Directions.find(e => e?.dir === dir)?.class : Directions.find(e => e?.dir === "left")?.class} z-40 transition-transform ${open ? "" : dir ? Directions.find(e => e?.dir === dir)?.transition : Directions.find(e => e?.dir === "left")?.transition} ${className ? className : ""}`}>
            {children}
        </div>
    );
}

const Directions = [
    {
        "dir": "left",
        "class": "left-0 top-0 h-full w-1/4",
        "transition": "-translate-x-full"
    },
    {
        "dir": "right",
        "class": "right-0 top-0 h-full w-1/4",
        "transition": "translate-x-full"
    },
    {
        "dir": "top",
        "class": "right-0 top-0 left-0 h-1/4 w-full",
        "transition": "-translate-y-full"
    }
]