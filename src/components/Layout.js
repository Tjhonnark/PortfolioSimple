import Navbar from './Navbar';
import Head from 'next/head';

export default function Layout(props){
    return (
        <>
        
        <Head>
            <title>Portfolio</title>
            <meta property="og:title" content="Portfolio" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://tjhonnar.ga" />
            <meta property="og:image" content="https://tjhonnar.ga/image0.jpg" />
        </Head>
        <Navbar/>
        <main className='container py-4'>
            {props.children}
        </main> 
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        
        </>
    )
}