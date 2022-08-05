import React from 'react'

const ProfileAbout = () => {
    return (
        <div>
            <div className="p-7 block-section">
                <h2 className="block-title">About me</h2>
                <p className="text-gray-600 mb-5">
                    Heyoo quas veritatis nulla distinctio fuga nihil temporibus et.
                    Quia dicta sapiente qui porro molestiae nobis incidunt
                    voluptatem. Et voluptas sunt nihil. At perferendis voluptatem
                    dolores nulla. Adipisci dolore non. Praesentium ipsa magnam ut
                    quia explicabo voluptates.
                </p>

                <div className="flex flex-col space-y-4">
                    <a href="#0" className="mail-link social-link-hover">
                        <i className="bx bx-at text-xl"></i>
                        <span>crisabbott@email.com</span>
                    </a>

                    <ul className="flex space-x-5">
                        <li>
                            <a href="#0" className="social-link-hover">
                                <i className="bx bxl-facebook-circle text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#0" className="social-link-hover">
                                <i className="bx bxl-twitter text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#0" className="social-link-hover">
                                <i className="bx bxl-github text-2xl"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileAbout