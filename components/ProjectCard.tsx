import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = () => {
    return (
        <div>
            <Link
                href="/projects/1"
                className="article-title-hover block mb-5"
            >
                <article className="article-section mb-6">
                    <div className="space-y-3 mb-5 p-7 pb-0">
                        <h2 className="text-lg font-semibold">
                            Qui quasi aut iure provident occaecati dignissimos et
                            illo.
                        </h2>

                        <p className="text-gray-600">
                            Numquam cumque ut excepturi. Nihil ea officiis. Voluptate
                            cum velit quibusdam sed ducimus qui. Quis ut non hic
                            facilis eum ut voluptatibus eveniet. Repellat accusantium
                            non maxime sequi dignissimos magnam et quos. Consequatur
                            vel numquam.
                        </p>

                        <p>
                            <time
                                dateTime="2021-05-09 19:00"
                                className="text-sm text-gray-400"
                            >
                                May 09, 2021
                            </time>
                        </p>
                    </div>

                    <div className="article-img">
                        <Image alt="" src={"/assets/img/cover3.avif"}
                            height={786} width={1000} />

                    </div>
                </article>
            </Link>
        </div>
    )
}

export default ProjectCard