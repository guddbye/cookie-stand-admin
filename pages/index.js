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
            </Head>
            <Header />
            <Main onSubmit={createCookieStandHandler} stringified = {str} />
            <Footer />
        </div>
    );
}

function Header() {
    return (
    <header className='bg-emerald-500 text-4xl p-4 font-semibold'>
        <h1>Cookie Stand Admin</h1>
    </header>
    );
}

function Main(props) {
    return (
        <main className='bg-emerald-100 p-8 flex flex-col items-center space-y-8'>
            <CookieStandForm onSubmit={props.onSubmit}/>
            <ReportTable />
            <TableDataJSON stringified={props.stringified} />
        </main>
    );
}

function Footer() {
    return (
        <footer className='bg-emerald-500 text-lg text-gray-700 p-4 font-semibold'>
            <p>&copy;2022</p>
        </footer>
    );
}

function CookieStandForm(props) {
    return (
        <form onSubmit={props.onSubmit} className='text-center p-4 bg-emerald-300 w-3/5 font-semibold space-y-5 rounded-lg'>
            <legend className='text-2xl'>Create Cookie Stand</legend>
            <div className='text-center'>
                <label className='flex w-full'> Location
                    <input name='location' type='text' placeholder='Enter location name here...' className='ml-2 w-full'></input>
                </label>
            </div>
            <div className='flex flex-auto space-x-5'>
                <label className='flex flex-col w-full'> Minimum Customers per Hour
                    <input name='min' type='text' placeholder='0'></input>
                </label>
                <label className='flex flex-col w-full'> Maximum Customers per Hour
                    <input name='max' type='text' placeholder='0'></input>
                </label>
                <label className='flex flex-col w-full'> Average Cookies per Sale
                    <input name='avg' type='text' placeholder='0'></input>
                </label>
                <button type='submit' className='bg-emerald-500 px-24 py-4'>Create</button>
            </div>
        </form>
    );
}

function ReportTable() {
    return <p>Report Table Coming Soon...</p>
}

function TableDataJSON(props) {
    return <p>{props.stringified}</p>
}