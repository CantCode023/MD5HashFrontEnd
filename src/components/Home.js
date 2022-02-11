import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

function Home({ darktheme }) {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div className="container flex justify-center items-center flex-col">
            <h1 data-aos="fade-right" className={`mt-16 text-center ${darktheme ? 'text-white':'text-black'}`}>What is an MD5 Hash?</h1>
            <p data-aos="fade-right" className={`font-display text-center w-2/4 mt-4 mb-24 ${darktheme ? 'text-white':'text-black'}`}>An MD5 hash is created by taking a string of an any length and encoding it into a 128-bit fingerprint. Encoding the same string using the MD5 algorithm will always result in the same 128-bit hash output. MD5 hashes are commonly used with smaller strings when storing passwords, credit card numbers or other sensitive data in databases such as the popular MySQL. This tool provides a quick and easy way to encode an MD5 hash from a simple string of up to 256 characters in length.

        MD5 hashes are also used to ensure the data integrity of files. Because the MD5 hash algorithm always produces the same output for the same given input, users can compare a hash of the source file with a newly created hash of the destination file to check that it is intact and unmodified.

        An MD5 hash is NOT encryption. It is simply a fingerprint of the given input. However, it is a one-way transaction and as such it is almost impossible to reverse engineer an MD5 hash to retrieve the original string.</p>
            <div className="container flex justify-center items-center flex-col">
            <h1 data-aos="fade-down" className={`text-center mt-12 mb-8 ${darktheme ? 'text-white':'text-black'}`}>Get Started</h1>
            <div data-aos="zoom-in" className="container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div className="container flex justify-center items-center flex-col">
                    <Link to="/checker" className="text-center no-underline text-white bg-sky-500 hover:bg-sky-700 ease-in-out duration-500 py-2 px-4 rounded-full ">Checker</Link>
                    <p className={`text-center mt-4 ml-5 pb-2 ${darktheme ? 'text-white':'text-black'}`}>Checks a valid MD5 Hash</p>
                </div>
                <div className="container flex justify-center items-center flex-col">
                    <Link to="/generator" className="text-center no-underline text-white bg-sky-500 hover:bg-sky-700 ease-in-out duration-500 py-2 px-4 rounded-full ">Generator</Link>
                    <p className={`text-center mt-4 ml-5 pb-2 ${darktheme ? 'text-white':'text-black'}`}>Converts string to MD5 Hash</p>
                </div>  
                <div className="container flex justify-center items-center flex-col">
                    <Link to="/contact" className="text-center no-underline text-white bg-sky-500 hover:bg-sky-700 ease-in-out duration-500 py-2 px-4 rounded-full ">Contact</Link>
                    <p className={`text-center mt-4 ml-5 pb-2 ${darktheme ? 'text-white':'text-black'}`}>Contact the owner of this website</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Home;