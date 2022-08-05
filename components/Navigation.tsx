import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <div>
            <ul className="flex space-x-8 font-medium">

                <li className="menu-link-active menu-link-hover">
                    <Link href="/"><a>Resume</a></Link>
                </li>
                <li className="menu-link menu-link-hover">
                    <Link href="/projects" >
                        Projects
                    </Link>
                </li>
                <li className="menu-link menu-link-hover">
                    <Link
                        href="/products"

                    >
                        Products
                    </Link>
                </li>
            </ul>
            <div className="border-t border-gray-200 mb-5"></div>

        </div>
    )
}

export default Navigation