import Layout from "../components/Layout";
import { skills, formations } from "../../profile";
import Link from 'next/link';

export default function Index(){
    return (
        <Layout>
            {/* Header Card */}
            <header className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-primary">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-fluid" src="image0.jpg" alt=""/>
                            </div>
                            <div className="col-md-8">
                                <h1 className="text-light">Rodrigo García</h1>
                                <h3 className="text-secondary">Junior Developer</h3>
                                <p className="text-light">Desarrollador de sitios web y landing page. Con capacidades de resolución de conflictos y de aprender nuevas tecnologías para estar siempre a la vanguardia.</p>
                                <a className="text-info" href="rodrigogarcia.pdf" target="blank">Hire Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Second Section */}
            <div className="row py-2">
                <div className="col-md-4">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Skills</h1>
                            {
                                skills.map(({skill, percentage}, i)=> (
                                    <div className="py-3" key={i}>
                                        <h5>{skill}</h5>
                                        <div className="progress">
                                            <div 
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${percentage}% `}}>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Formation</h1>
                            <ul>
                                {
                                    formations.map(({title, institution, finish, certificate}, index) => (
                                        <li key={index}>
                                            <h4>
                                                {title}
                                            </h4>
                                            <h5>{institution}</h5>
                                            <p>{finish}</p>
                                        
                                        </li>
                                    ))
                                }
                            </ul>
                            <Link href="/certificates">
                                <a className="btn btn-dark">Certificates</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}