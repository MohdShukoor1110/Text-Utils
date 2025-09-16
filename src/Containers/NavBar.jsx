import { Link } from 'react-router-dom'

export default function NavBar(props) {
    const navColor = props.mode === 'light'?'light':'secondary'
    const btnText = props.mode === 'light'?'Switch to Dark Mode':'Switch to Light Mode'
    return (
        <div>
            <nav className={`navbar navbar-expand-sm border-bottom border-2 border-dark navbar-${props.mode} bg-${navColor}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.togleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
                        <label className="form-check-label" htmlFor="switchCheckDefault">{btnText}</label>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
