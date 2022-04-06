import Layout from "../components/Layout";

export default function Certificates() {
    return (
        <Layout>
            <header className="row text-center">
                <h1>Certificates</h1>
            </header>
            <div className="container text-light">
                <div className="row d-flex justify-content-center text-center">
                    <a className="btn col-md-4" href="nextu.png" target="blank">
                        <img src="nextu.png" alt="" className="img-fluid"/>
                        <div className="card-body bg-dark">
                            <h4 className="card-title">
                            Fundamentos en Google Ads
                            </h4>
                        </div>
                    </a>
                    <a className="btn col-md-4 ho" href="bachiller.png" target="blank">
                        <img src="bachiller.png" alt="" className="img-fluid"/>
                        <div className="card-body bg-dark">
                            <h4 className="card-title">
                            Bachiller en Ciencias y Letras
                            </h4>
                        </div>
                    </a>
                </div>
            </div>
        </Layout>
    )
}