

const Contact = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(src/assets/backgrounds/Contact.jpeg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content flex flex-col space-y-60">
            <p className="font-bold text-6xl">Contact Me:</p>
            <div className="card w-full bg-base-100 p-5">
                <div className="card bg-warning text-black p-2">
                    I am always open to new opportunities and collaborations. Whether you have a project inquiry, a question, or just want to connect, feel free to reach out. Your message is important to me, and I will try to respond as promptly as possible. Let's work together to create something amazing!
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact