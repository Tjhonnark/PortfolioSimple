import Layout from "../components/Layout";

export default function Index(){
    return (
        <Layout>
            {/* Header Card */}
            <header className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-secondary">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-fluid" src="image0.jpg" alt=""/>
                            </div>
                            <div className="col-md-8">
                                <h1>Rodrigo García test</h1>
                                <h3>Developer Junior</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima ad magnam unde. Reprehenderit error possimus placeat, atque voluptatem repudiandae nostrum dolorem vero eligendi rem? Ullam dolor praesentium illum beatae.</p>
                                <a href="/hireme">Hire Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Layout>
    )
}