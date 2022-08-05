import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProfileCard = () => {
    return (
        <div>
            <div className="shadow rounded-xl overflow-hidden">
                <div
                    className="h-32 bg-cover"
                    style={{
                        backgroundImage: "url('assets/img/cover.jpg')",
                    }}
                ></div>
                <div className="pt-14 p-7 bg-white relative">
                    <span className="status-badge bg-gray-400">Busy</span>
                    <Link href="/">
                        <div className='user-photo'>
                            <Image
                                src="/assets/img/avatar.jpg"
                                alt="Avatar"
                                className='user-photo'
                                width={80}
                                height={80}
                            />
                        </div>
                    </Link>
                    <div className="text-lg font-semibold mb-1.5">
                        Cristopher Abbott
                    </div>
                    <div className="text-sm text-gray-400 mb-7">
                        Senior Developer
                    </div>
                    <div className="flex group">
                        <button className="download-btn">Download CV</button>
                        <button className="download-btn-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.8"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileCard