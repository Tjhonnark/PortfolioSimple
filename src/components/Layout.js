import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout(props){
    return (
        <>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="Desarrollador de sitios web y landing page. Con capacidades de resolución de conflictos y de aprender nuevas tecnologías para estar siempre a la vanguardia." />

                {/* FACEBOOK */}
                <meta property="og:title" content="MyPortfolio" />
                <meta property="og:description" content="Desarrollador de sitios web y landing page. Con capacidades de resolución de conflictos y de aprender nuevas tecnologías para estar siempre a la vanguardia." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tjhonnar.ga" />
                <meta property="og:image" content="https://tjhonnar.ga/image0.jpg" />
                {/* TWITTER */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="MyPortfolio"/>
                <meta name="twitter:creator" content="@Roderix78"/>
            </Head>
            <Navbar/>
            <main className='container py-4'>
                {props.children}
            </main> 
        </>
    )
}