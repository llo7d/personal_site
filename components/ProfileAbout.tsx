import Link from 'next/link'
import React from 'react'

const ProfileAbout = () => {
    return (
        <div>
            <div className="p-7 block-section">
                <h2 className="block-title">About me</h2>
                <p className="text-gray-600 mb-5">
                    Juniour Developer from Berlin, Germany. Big fan of software and business.
                    <br></br>
                    Currently I am really focused on learning about everything Web Development and Mechatronics and applying it to my own projects in unique and diffrent ways.
                    <br></br>
                    I also like talking about the things I learn on my YouTube channel.


                </p>

                <div className="flex flex-col space-y-4" >
                    <Link href={"/contact"} >
                        <a className="mail-link social-link-hover" target="_blank" >
                            <i className="bx bx-at text-xl mail-link social-link-hover"></i>
                            <span>peter@zudrit.com</span>
                        </a>
                    </Link>

                    <ul className="flex space-x-5">
                        <li>
                            <Link href={"https://www.youtube.com/channel/UCr7xtC98NW4H0b4UcrShpDA"} >
                                <a className="social-link-hover" target="_blank">
                                    <i className="bx bxl-youtube text-2xl" ></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"https://twitter.com/"}>
                                <a className="social-link-hover" target="_blank">
                                    <i className="bx bxl-twitter text-2xl"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"https://github.com/peterlloydskubur"}>
                                <a className="social-link-hover" target="_blank">
                                    <i className="bx bxl-github text-2xl"></i>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default ProfileAbout