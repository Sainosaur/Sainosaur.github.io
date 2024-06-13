import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1625315642929-3774ba1d1af4?q=80&w=3357&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center ">
                    <div className=" ">
                        <h1 className="mb-5 text-5xl font-bold text-slate-100"> Professional Web Development: Crafting Modern, Scalable, and User-Centric Applications </h1>
                        <p className="mb-5 text-slate-100 text-xl">Empowering Your Digital Presence with Customized Solutions for Everyone </p>
                    <div>
                        <h1 className="text-slate-100">Check my work out!</h1>
                    <button className="btn btn-primary" onClick={() => navigate('/projects')}>Projects</button>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Home