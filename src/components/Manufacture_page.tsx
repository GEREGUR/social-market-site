import React from "react"


export default function Manufacture(){
    return(
        <div className="w-full h-1/6 border-2 border-violet-700 flex justify-around">
            <nav className="w-1/3 flex justify-center ">
                <ul className="flex flex-row gap-3 sm:gap-10 my-16 ml-10">
                    <li className="hover:cursor-pointer hover:text-indigo-700 text-xl font-bold">
                        FAQ
                    </li>
                    <li className="hover:cursor-pointer hover:text-indigo-700 text-xl font-bold">
                        FAQ
                    </li>
                    <li className="hover:cursor-pointer hover:text-indigo-700 text-xl font-bold">
                        FAQ
                    </li>
                </ul>
            </nav>
            <ul className="flex flex-row gap-3 my-16 sm:gap-10 mr-10">
                    <li className="hover:cursor-pointer hover:text-indigo-700 text-xl font-bold">tg</li>
                    <li className="hover:cursor-pointer hover:text-indigo-700 text-xl font-bold">tg</li>
                    <li className="hover:cursor-pointer hover:text-indigo-700 text-xl font-bold">tg</li>
                </ul>
        </div>
    )
}
