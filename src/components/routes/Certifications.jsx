import PropTypes from 'prop-types'
import { useSelector } from "react-redux"

const RenderCertification = ({name, organisation, link, logoLink}) => {
    return (
        <div className="card card-side bg-base-300 shadow-xl">
        <figure><img className="w-40 h-40" src={logoLink} alt="Logo"/></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="font-bold">Awarding Organisation: <span className="font-normal badge badge-primary">{organisation}</span> </p>
            <div className="card-actions justify-end">
            <a className="btn btn-primary" href={link}>View</a>
            </div>
        </div>
        </div>
    )
}

RenderCertification.propTypes = {
    name: PropTypes.string,
    organisation: PropTypes.string,
    link: PropTypes.string,
    logoLink: PropTypes.string
}


const Certification = () => {
    const logoColor = useSelector(state => state.theme.logoInActive)
    const certifications = [{
        name: "Full Stack Open 2024",
        organisation: "University Of Helsinki",
        link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/af2376dcfe2e53e5326391e20392b13b",
        logoLink: `/src/assets/UoH-Logo-${logoColor}.png`
    }, {
        name: "Full Stack GraphQL",
        organisation: "University of Helsinki",
        link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/6f34a9323a7e1a0b75a50edb17baea34",
        logoLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"
    }, {
        name: "Full Stack Open TypeScript",
        organisation: "University of Helsinki",
        link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/6f51b0b369e44f59ad7c15ce798346e8",
        logoLink: "src/assets/TS-Logo.png"
    }, {
        name: "Introduction to Artifical Intelligence with Python",
        organisation: "CS50",
        link: "https://certificates.cs50.io/2c4cb5a6-a5c6-4a62-bc69-7e67371c6643.pdf?size=letter",
        logoLink: "https://media.licdn.com/dms/image/C4E0BAQGYjmmBCvqLmg/company-logo_200_200/0/1631309789389?e=2147483647&v=beta&t=cUXwnWAaV8IFLnrGbPhH4yPEsP9n1WrtBEOMDwL5DYA"
    }]

    return (
        <>
            <div className="hero min-h-screen gap-1 space-y-40 " style={{backgroundImage: 'url(https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
            <div className="hero-overlay bg-opacity-60">
                <p className="text-5xl text-slate-300 p-1 py-10 font-bold text-center">My Certifications:</p>
            </div>
            <div className="card w-full bg-base-100 space-y-5 p-5">
                    <p className="card bg-warning text-black p-3">As a committed and enthusiastic junior web developer, I have obtained a diverse array of certifications that exemplify my dedication to continuous learning and professional development. Each certification underscores my proficiency in various frameworks, ensuring that I am thoroughly prepared to address the requirements of each project in the most efficient manner. Below are the certifications I have achieved:</p>
                    <div className="divider">Certifications</div>
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 ">
                        {certifications.map(certification => <RenderCertification key={certification.name} {...certification}/>)}
                    </div>
                
            </div>
        </div>
        </>
    )
}

export default Certification