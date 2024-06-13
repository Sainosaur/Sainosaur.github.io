import { useNavigate } from 'react-router';

const FourOFour = () => {
    const navigate = useNavigate()
    return (
        <div className="mockup-code flex flex-col h-screen ">
            <div className="h-1/4"></div>
            <div className="grid justify-center">
                <pre  className= "text-8xl"><code>404!</code></pre>
                <pre data-prefix=">" className="text-error"><code></code>Cannot find page</pre>
                <pre data-prefix=">" className="text-success"><code>Found a pretty good web developer though!</code></pre>
                <pre data-prefix=">" className="text" ><button className='btn-outline btn-accent' onClick={() => navigate('')}>Click me to learn more!</button></pre>
            </div>
        </div>
    )
}

export default FourOFour