export const Alert = ({ type, msg, icon, bordered,accent, close,onClose }) => {
    return (
        <div className={`${bordered ? AlertTypes.find(e => e?.type === type)?.borderedClass : ""} ${type ? AlertTypes.find(e => e?.type === type)?.divClass : ""} flex items-center gap-x-2 ${accent ? `${AlertTypes.find(e => e?.type === type)?.borderedAccent} rounded-none` : ""}`} role="alert">
            {icon ? icon() : ""}
            {msg ? msg : "Change a few things up and try submitting again."}
            {close ? close() :
                <button onClick={onClose} type="button" className={`${type?AlertTypes.find(e => e?.type === type)?.closeClass:""} ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8`}>
                    <span className="sr-only">Close</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
            }
        </div>
    );
}
const AlertTypes = [
    {
        "type": "info",
        "divClass": "p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400",
        "borderedClass": "border border-blue-300",
        "borderedAccent": "border-t-4 border-blue-300",
        "closeClass": "text-blue-500 bg-blue-50 hover:bg-blue-200"
    },
    {
        "type": "danger",
        "divClass": "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",
        "borderedClass": "border border-red-300",
        "borderedAccent": "border-t-4 border-red-300",
        "closeClass": "text-red-500 bg-red-50 hover:bg-red-200"
    },
    {
        "type": "success",
        "divClass": "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",
        "borderedClass": "border border-green-300",
        "borderedAccent": "border-t-4 border-green-300",
        "closeClass": "text-green-500 bg-green-50 hover:bg-green-200"
    },
    {
        "type": "warning",
        "divClass": "p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",
        "borderedClass": "border border-yellow-300",
        "borderedAccent": "border-t-4 border-yellow-300",
        "closeClass": "text-yellow-500 bg-yellow-50 hover:bg-yellow-200"
    },
    {
        "type": "dark",
        "divClass": "p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300",
        "borderedClass": "border border-gray-300",
        "borderedAccent": "border-t-4 border-gray-300",
        "closeClass": "text-gray-500 bg-gray-50 hover:bg-gray-200"
    }
]