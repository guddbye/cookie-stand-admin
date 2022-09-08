import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import Head from 'next/head'
import { useState } from 'react';

export default function Home() {
    const [str, setStr] = useState('{}');

    function createCookieStandHandler(event) {
        event.preventDefault();
        stringifyContent(event.target.location.value, parseInt(event.target.min.value), parseInt(event.target.max.value), parseInt(event.target.avg.value));
        event.target.reset();
    }

    function stringifyContent(location, min, max, avg){
        setStr(JSON.stringify({location, min, max, avg}))
    }

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="/cookie.ico" />
            </Head>
            <Header />
            <Main onSubmit={createCookieStandHandler} stringified = {str} />
            <Footer />
        </div>
    );
}

function Header() {
    return (
    <header className='bg-gray-500'>
        <h2>cookie stand admin</h2>
    </header>
    );
}

function Main(props) {
    return (
        <main className='bg-gray-500'>
            <CookieStandForm onSubmit={props.onSubmit}/>
            <ReportTable />
            <TableDataJSON stringified={props.stringified} />
        </main>
    );
}

function Footer() {
    return (
        <footer className='bg-gray-500'>
            <p>&copy; Cookies</p>
        </footer>
    );
}

function CookieStandForm(props) {
    return (
        <form onSubmit={props.onSubmit} className='bg-gray-500'>
            <legend className='text-2xl'>create cookie stand</legend>
            <div className='text-center'>
                <label className='flex w-full'> Location
                    <input name='location' type='text' placeholder='Location' className='ml-2 w-full'></input>
                </label>
            </div>
            <div className='flex flex-auto space-x-5'>
                <label className='flex flex-col w-full'> Minimum Customer Per Hour: 
                    <input name='min' type='text' placeholder='0'></input>
                </label>
                <label className='flex flex-col w-full'> Maximum Customers Per Hour:
                    <input name='max' type='text' placeholder='0'></input>
                </label>
                <label className='flex flex-col w-full'> Average Cookies Per Sale
                    <input name='avg' type='text' placeholder='0'></input>
                </label>
                <button type='submit' className='bg-gray-500'>Create</button>
            </div>
        </form>
    );
}

function ReportTable() {
    return <p>********** TABLE HERE **********</p>
}

function TableDataJSON(props) {
    // return <p>{props.stringified}</p>
}