import Image from "next/image";
import { useState } from "react"

export default function Drawer({children, className, isOpen, onClose})
{
    return (
        <>
            <div className={"md:hidden w-[50vw] z-50 flex min-h-screen bg-white shadow-xl fixed top-0 left-0 " + (isOpen ? 'animate-navbarSlideOpen translate-x-0' : 'animate-navbarSlideClose -translate-x-full')}>
                <div className="w-2/3 mx-auto m-4">
                    <div className="flex justify-between items-end text-dark mb-12">
                        <div>
                            <h3 className="text-2xl font-medium">Menu</h3>
                        </div>
                        <button type="button" className="text-2xl hover:scale-95" onClick={() => onClose(!isOpen)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                className="bi bi-x-circle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                    <div className={className}>
                        {children}
                    </div>
                </div>
            </div>
            <div className={(isOpen && "min-w-screen animate-galleryOpacity bg-black bg-opacity-50 absolute top-0")}></div>
        </>
    )   
}