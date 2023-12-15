import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"

const projects = [
    {
        name: "Dicoding",
        description:"Descripton not found.",
        image: "/Dicoding.png",
    },
    {
        name: "Freecodecamp",
        description: "Descripton not found.",
        image: "/Freecodecamp.png",
    },
]


const ProjectsSection = () => {
    return (
        <section className="py-60">
            <h1 className="text-center font-bold text-4xl">
                Certificate
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col space-y-28">
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                    <div className=" md:w-1/2">
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl hover:opacity-70"
                                            />
                                    </div>
                                    <div className="mt-8 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default ProjectsSection