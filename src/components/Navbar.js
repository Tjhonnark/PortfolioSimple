import Link from 'next/link';

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">Simple Portfolio</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav col-md-12">
                        <li className="nav-item">
                            <Link href="https://github.com/tjhonnark">                
                                <a className="nav-link">GitHub</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}