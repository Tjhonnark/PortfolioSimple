import Navbar from './Navbar';
import Head from 'next/head';

export default function Layout(props){
    return (
        <>
        <Head>
            <title>Portfolio</title>
        </Head>
        <Navbar/>
        <main className='container py-4'>
            {props.children}
        </main>
        </>

    )
}