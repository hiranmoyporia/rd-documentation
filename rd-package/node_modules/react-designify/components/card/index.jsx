import { Fragment } from "react";
import { ButtonRounded, ButtonShadow } from "../button";

export const Card = ({ coverImage, coverImageAlt, title, desc, action, cardBody, rounded, shadow, onClick }) => {
    return (
        <div onClick={onClick} className={`${onClick ? "hover:bg-gray-50 cursor-pointer" : ""} ${rounded ? ButtonRounded.find(e => e?.rounded === rounded)?.class : ""} ${shadow ? ButtonShadow.find(e => e?.shadow === shadow)?.class : ""} max-w-sm bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 overflow-hidden`}>
            {
                cardBody ?
                    cardBody() :
                    <Fragment>
                        {coverImage && <img className={`${rounded ? ButtonRounded.find(e => e?.rounded === rounded)?.class : ""} rounded-b-none`} src={coverImage} alt={coverImageAlt} />}
                        <div className="p-5">
                            {title && typeof title === "function" ? title() : <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>}
                            {desc && typeof desc === "function" ? desc() : <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>}
                            {action && action()}
                        </div>
                    </Fragment>
            }
        </div>
    );
}