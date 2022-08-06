import Link from 'next/link'
import React from 'react'

interface Props {
    pathname: string
}

const Navigation = ({ pathname }: Props) => {

    const links = [
        {
            href: '/',
            label: 'Resume',
            active: pathname === '/',
        },
        {
            href: '/products',
            label: 'Products',
            active: pathname === '/products',
        },
        {
            href: '/projects',
            label: 'Projects',
            active: pathname === '/projects',
        },
    ]

    return (
        <>
            <ul className="flex space-x-8 font-medium " >
                {links.map(({ href, label, active }) => (
                    <Link href={href} key={href}>
                        <a className={`${active ? 'menu-link-active menu-link-hover' : 'menu-link menu-link-hover'}`}>
                            {label}
                        </a>
                    </Link>
                ))}
            </ul >
            <div className="border-t border-gray-200 mb-5" />
        </>
    )
}

export default Navigation