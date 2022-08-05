import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <div>
            <ul className="flex space-x-8 font-medium">
                <li>
                    <Link
                        href="/"
                    >
                        <a className="menu-link-active menu-link-hover">

                            Resume
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className="menu-link menu-link-hover">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        href="/products"
                        className="menu-link menu-link-hover"
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