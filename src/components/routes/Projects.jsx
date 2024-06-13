import PropTypes from 'prop-types'

const projects = [{
    name: "Project Delta Portfolio",
    subText: "This Website!",
    languages: ["JavaScript", "HTML"],
    frameworks: ["React","Tailwind CSS"],
    background: "bg-success"
}]

const RenderProject = ({project}) => {
    return (
            <div className={`card ${project.background} text-primary-content`}>
                    <div className="flex justify-col card-body">
                        <h2 className="card-title">{project.name}</h2>
                        <p>{project.subText}</p>
                        <p className="flex gap-1" >Frameworks: {project.frameworks.map(framework => <span key={framework}className="badge badge-primary">{framework}</span>)} </p>
                        <p className="flex gap-1">Languages: {project.languages.map(language => <span key={language} className="badge badge-warning" >{language}</span>)}</p>
                        <div className="card-actions justify-end">
                            <div className="tooltip" data-tip="Already here!">
                                <button className="btn">Visit</button>
                    </div>
                </div>
                </div>
            </div>
    )
} 

RenderProject.propTypes = {
    project: PropTypes.object
}

const Projects = () => {
    return (
        <div className="hero min-h-screen w-screen gap-1 space-y-20 " style={{backgroundImage: 'url(https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
            <div className="hero-overlay bg-opacity-60">
                <p className="text-5xl text-slate-300 py-10 font-bold text-center">My Portfolio:</p>
            </div>
                <div className="card w-full bg-base-100 p-3 space-y-5">
                    <p className="card bg-warning text-black p-5">Explore a collection of my latest endeavors and collaborations. Each project represents a unique blend of creativity, innovation, and problem-solving. View the projects to see them in action!</p>
                    <div className="divider">Projects</div>
                    <div className="grid lg:grid-cols-3">
                        {projects.map((project) => <RenderProject key={project.name} project={project} /> )}
                    </div>
                    <div className="divider"></div>
                    <button className="btn btn-warning text-xl " onClick={()=>document.getElementById('my_modal_2').showModal()}> + Add</button>
                    <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Great!</h3>
                        <p className="py-4"> Please click below to contact me to discuss the project in more detail! </p>
                        <button className="btn btn-primary" >Contact</button>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                    </dialog>
                </div>
        </div>
    )
}

export default Projects