import { Fragment, useState } from "react";

export const Accordion = (props) => {
    const [activeIndex, setActiveIndex] = useState(props?.data.findIndex(e => e.active === true))
    return (
        <Fragment>
            {
                props?.data?.map((elem, index) => {
                    return (
                        <Fragment key={index}>
                            <button onClick={() => { activeIndex === index ? setActiveIndex() : setActiveIndex(index) }} type="button" className={`flex items-center justify-between w-full p-3 font-medium text-left text-gray-500 border ${index === props?.data?.length - 1 ? "" : activeIndex === index ? "" : "border-b-0"} ${activeIndex === index ? "bg-gray-100" : ""} border-gray-200 focus:ring-2 focus:ring-blue-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out`}>
                                {elem?.customHeader ? elem?.customHeader() : <span>{elem?.header}</span>}
                                <svg className={`w-6 h-6 rotate-${activeIndex === index ? "180" : "0"} shrink-0 transition duration-150 ease-in-out`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </button>
                            {
                                activeIndex === index &&
                                <div className={` transition duration-150 ease-in-out p-3 border border-t-0 border-b-0 border-gray-200 ${index === props?.data?.length - 1 ? "border-b" : ""}`}>
                                    {elem?.content()}
                                </div>
                            }
                        </Fragment>
                    );
                })
            }
        </Fragment>
    );
}