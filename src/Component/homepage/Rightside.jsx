import React from 'react';
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


const Rightside = () => {
    return (
        <div>
            <h1 className='text-center py-2 font-bold'>Login With</h1>
            <div className='flex flex-col gap-2'>
                <button className='btn text-green-400 border-green-400'><FaGoogle />Login with google</button>
                <button className='btn'>Login with github</button>
            </div>
            <div >
                <h1 className='font-bold text-2xl py-5'>Find Us On</h1>
                <div className='flex flex-col '>
                    <Link href="https://www.facebook.com/" className='flex items-center gap-2 border py-3 px-2 border-b-0 text-blue-600'><CiFacebook />
                        Facebook</Link>
                    <Link href="https://x.com/" className='flex items-center gap-2 border py-3 px-2 border-b-0 text-sky-500'><CiTwitter />
                        Twitter</Link> 
                    <Link href="https://www.instagram.com/" className='flex items-center gap-2 border py-3 px-2 text-[#E4405F]'><FaInstagram />
                        Instagram</Link>
                </div>

            </div>
            
        </div>
    );
};

export default Rightside;