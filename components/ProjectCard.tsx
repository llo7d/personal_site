import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'


interface Props {
    title: string
    description: string
    date: string
    link: string
    image: string | StaticImageData
}

const ProjectCard: React.FC<Props> = ({ title, description, date, link, image }) => {

    return (
        <div >
            <Link href={link}>
                {/* Shity way to do it but hey, it works */}
                {title === "3D Character Preview Tool" ? (
                    <a target="_blank">
                        <article className="article-section mb-6" >
                            <div className="space-y-3 mb-5 p-7 pb-0"  >
                                <h2 className="text-lg font-semibold">
                                    {title}
                                </h2>

                                <p className="text-gray-600">
                                    {description}
                                </p>

                                <p>
                                    <time
                                        dateTime="2021-05-09 19:00"
                                        className="text-sm text-gray-400"
                                    >
                                        {date}
                                    </time>
                                </p>
                            </div>
                            <div className="article-img">
                                <Image alt="" src={image} width={1000} height={786} placeholder='empty' priority />
                            </div>
                        </article>
                    </a>

                ) :
                    (
                        <article className="article-section mb-6" >
                            <div className="space-y-3 mb-5 p-7 pb-0"  >
                                <h2 className="text-lg font-semibold">
                                    {title}
                                </h2>

                                <p className="text-gray-600">
                                    {description}
                                </p>

                                <p>
                                    <time
                                        dateTime="2021-05-09 19:00"
                                        className="text-sm text-gray-400"
                                    >
                                        {date}
                                    </time>
                                </p>
                            </div>
                            <div className="article-img">
                                <Image alt="" src={image} width={1000} height={786} placeholder='empty' priority />
                            </div>
                        </article>
                    )}
            </Link>
        </div>
    )
}

export default ProjectCard