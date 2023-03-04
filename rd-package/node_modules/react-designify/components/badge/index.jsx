export const Badge = ({ text, type, size, bordered, roundedFull, icon, onClick, remove, removeOnClick }) => {
    return (
        <span onClick={!removeOnClick && onClick} className={`${onClick ? "cursor-pointer" : ""} ${size ? BadgeSizes.find(e => e?.size === size)?.class : "text-sm"} inline-flex items-center ${(bordered && type) ? BadgeTypes.find(e => e?.type === type)?.border : ""} ${text ? "font-medium px-2.5 py-0.5" : "p-1"} ${roundedFull ? "rounded-full" : "rounded"} ${type ? BadgeTypes.find(e => e?.type === type)?.class : ""}`}>
            {icon && icon()}
            {text}
            {remove ? <button onClick={removeOnClick} type="button" className={`${(remove && type) ? BadgeTypes.find(e => e?.type === type)?.remove : ""} inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm`}>
                <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                <span className="sr-only">Remove badge</span>
            </button> : null}
        </span>
    );
}
export const BadgeTypes = [
    {
        "type": "default",
        "class": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
        "border": "border border-blue-300",
        "remove": "hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
    },
    {
        "type": "dark",
        "class": "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
        "border": "border border-gray-300",
        "remove": "hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
    },
    {
        "type": "red",
        "class": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
        "border": "border border-red-300",
        "remove": "hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300"
    },
    {
        "type": "green",
        "class": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
        "border": "border border-green-300",
        "remove": "hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300"
    },
    {
        "type": "yellow",
        "class": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
        "border": "border border-yellow-300",
        "remove": "hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300"
    },
    {
        "type": "indigo",
        "class": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
        "border": "border border-indigo-300",
        "remove": "hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300"
    },
    {
        "type": "purple",
        "class": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
        "border": "border border-purple-300",
        "remove": "hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300"
    },
    {
        "type": "pink",
        "class": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
        "border": "border border-pink-300",
        "remove": "hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300"
    }
]
const BadgeSizes = [
    {
        "size": "small",
        "class": "text-xs"
    },
    {
        "size": "medium",
        "class": "text-sm"
    },
    {
        "size": "large",
        "class": "text-lg"
    }
]