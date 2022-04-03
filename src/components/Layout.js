import Navbar from './Navbar';

export default function Layout(props){
    return (
        <>
        <Navbar/>
        <main className='container py-4'>
            {props.children}
        </main>
        </>

    )
}