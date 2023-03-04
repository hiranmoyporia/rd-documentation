import { Fragment } from "react";

export const Input = ({ required, type, placeholder, size, fullWidth }) => {
    return (
        <Fragment>
            <div className="relative z-0 w-full mb-6 group">
                <input type="email" className={`block p-2.5 rounded ${fullWidth ? "w-full" : "w-64"} text-sm text-gray-900 bg-transparent border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 peer`} placeholder=" " required />
                <label className="font-medium bg-white z-10 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2.5 origin-[0] left-3 px-1 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            {/* <input type={type} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-1 transition duration-150 ease-in-out focus:outline-none ${required ? "focus:ring-red-400 focus:border-red-400" : ""} block ${fullWidth ? "w-full" : "w-64"} ${size ? Sizes.find(e => e?.size === size)?.class : Sizes.find(e => e?.size === "md")?.class}`} placeholder={placeholder} required={required ? true : false} />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label> */}
        </Fragment>
    );
}
const Sizes = [
    {
        "size": "sm",
        "class": "py-1 px-2"
    },
    {
        "size": "md",
        "class": "p-2"
    },
    {
        "size": "lg",
        "class": "p-3"
    },
]