import { title } from 'process'
import React from 'react'

interface Props {
    key: number,
    letter: string,
    letterColour: string,
    name: string,
    description: string,
    type: string,
    svg: string,
    role: string,
    link: string,
    last: boolean,
}


const ProductCard = ({ key, letter, letterColour, name, description, type, svg, role, link, last }: Props) => {

    return (
        <div key={key}>
            <div className="mb-5 item-section">
                <div className={letterColour}>
                    <span className="text-2xl">{letter}</span>
                </div>

                <div className="w-full space-y-5">
                    <div className="item-header">
                        <div className="space-y-1.5">
                            <div className="font-medium">{name}</div>
                            <div className="flex space-x-5">
                                <div className="item-header-info">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                        />
                                    </svg>
                                    <span>{type}</span>
                                </div>
                                <div className="item-header-info">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                    <span>{role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600">
                        {description}
                    </p>
                    <button className="flex items-center space-x-3 px-3.5 py-1.5 rounded-lg group border border-purple-500 bg-white text-purple-500 text-sm font-medium transition duration-200 hover:border-purple-600 hover:text-white hover:bg-purple-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                        </svg>
                        <span>{link}</span>
                    </button>
                    {!last ? <div className="border-b border-gray-200"></div> : null}
                </div>
            </div>

        </div>
    )
}

export default ProductCard