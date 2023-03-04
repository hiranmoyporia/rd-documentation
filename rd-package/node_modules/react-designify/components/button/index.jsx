export const Button = ({ children,type, text,fullWidth, size, rounded, gradient, gradientDuo, ring, shadow, hoverShadow, leftIcon, rightIcon, outline, buttonType, onClick,onlyIcon,disabled,className }) => {
    return (
        <button disabled={disabled?true:false} type={buttonType ? buttonType : "button"} onClick={onClick} className={`${fullWidth?"w-full":""} ${className?className:""} ${disabled?"!cursor-not-allowed":""} ${onlyIcon?"!p-2.5":""} ${leftIcon || rightIcon ? "inline-flex items-center" : ""} ${shadow ? ButtonShadow.find(e => e?.shadow === shadow)?.class : ""} ${hoverShadow ? `hover:${ButtonShadow.find(e => e?.shadow === hoverShadow)?.class}` : ""} ${ring ? "focus:ring-4" : ""} ${rounded ? ButtonRounded.find(e => e?.rounded === rounded)?.class : ButtonRounded.find(e => e?.rounded === "default")?.class} ${size ? ButtonSizes.find(e => e?.size === size)?.class : ButtonSizes.find(e => e?.size === "md")?.class} ${type && !outline ? ButtonTypes.find(e => e?.type === type)?.class : ""} ${(type && gradient) ? ButtonTypes.find(e => e?.type === type)?.gradient : ""} ${(type && gradientDuo) ? ButtonTypes.find(e => e?.type === type)?.gradientDuo : ""} ${outline && type ? ButtonTypes.find(e => e?.type === type)?.outline : ""} transition duration-150 ease-in-out`.replace(/\s\s+/g, ' ')}>
            {leftIcon && leftIcon()}
            {text}
            {rightIcon && rightIcon()}
            {onlyIcon&&onlyIcon()}
            {children}
        </button>
    );
}
export const ButtonTypes = [
    {
        "type": "primary",
        "class": "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
        "outline": "text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-blue-300 font-medium dark:border-blue-600 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800",
        "gradient": "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
        "gradientDuo": "bg-gradient-to-r from-purple-600 to-blue-500 hover:bg-gradient-to-l",
        "active":"bg-blue-800"
    },
    {
        "type": "dark",
        "class": "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
        "outline": "text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-gray-300 font-medium dark:border-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
        "gradient": "bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800",
        "active":"bg-gray-900"
    },
    {
        "type": "light",
        "class": "text-gray-900 bg-gray-100 focus:outline-none hover:bg-gray-200 focus:ring-gray-300 font-medium dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
        "outline": "text-gray-900 bg-white border border-gray-200 focus:outline-none hover:bg-gray-200 focus:ring-gray-200 font-medium dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
        "active":"bg-gray-200"
    },
    {
        "type": "green",
        "class": "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 font-medium dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
        "outline": "focus:outline-none text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-green-300 font-medium dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
        "gradient": "bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none focus:ring-green-300 dark:focus:ring-green-800",
        "gradientDuo": "bg-gradient-to-r from-green-400 to-blue-600 hover:bg-gradient-to-l",
        "active":"bg-green-800"
    },
    {
        "type": "red",
        "class": "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 font-medium dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
        "outline": "focus:outline-none text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-red-300 font-medium dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
        "gradient": "bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none focus:ring-red-300 dark:focus:ring-red-800",
        "active":"bg-red-800"
    },
    {
        "type": "yellow",
        "class": "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 font-medium dark:focus:ring-yellow-900",
        "outline": "focus:outline-none text-yellow-400 border border-yellow-400 hover:bg-yellow-400 hover:text-white focus:ring-yellow-300 font-medium dark:focus:ring-yellow-900",
        "gradient": "bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800",
        "gradientDuo": "!text-gray-800 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l",
        "active":"bg-yellow-500"
    },
    {
        "type": "purple",
        "class": "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 font-medium dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
        "outline": "focus:outline-none text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white focus:ring-purple-300 font-medium dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
        "gradient": "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800",
        "active":"bg-purple-800"
    }
]
export const ButtonSizes = [
    {
        "size": "xs",
        "class": "px-3 py-2 text-xs"
    },
    {
        "size": "sm",
        "class": "px-3 py-2 text-sm"
    },
    {
        "size": "md",
        "class": "text-sm px-5 py-2.5"
    },
    {
        "size": "lg",
        "class": "px-5 py-3 text-base"
    },
    {
        "size": "xl",
        "class": "text-base px-6 py-3.5"
    }
]
export const ButtonRounded = [
    {
        "rounded":"none",
        "class":""
    },
    {
        "rounded": "default",
        "class": "rounded"
    },
    {
        "rounded": "lg",
        "class": "rounded-lg"
    },
    {
        "rounded": "full",
        "class": "rounded-full"
    }
]
export const ButtonShadow = [
    {
        "shadow": "sm",
        "class": "drop-shadow-sm"
    },
    {
        "shadow": "default",
        "class": "drop-shadow"
    },
    {
        "shadow": "md",
        "class": "drop-shadow-md"
    },
    {
        "shadow": "lg",
        "class": "drop-shadow-lg"
    },
    {
        "shadow": "xl",
        "class": "drop-shadow-xl"
    },
    {
        "shadow": "2xl",
        "class": "drop-shadow-2xl"
    },
    {
        "shadow": "none",
        "class": "drop-shadow-none"
    },
]