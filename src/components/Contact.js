import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import { Alert } from 'react-bootstrap'

export default function Contact({ darktheme, open, submit, error, sopen, serror }) {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    return (
        <div className={`h-full container mb-5 flex justify-center items-center flex-col`}>
            <h1 data-aos="fade-right" className={`mt-8 text-center ${darktheme ? 'text-white':'text-black'}`}>Contact</h1>
            <Alert onClose={() => sopen(false)} dismissible className={`${open?"block":"hidden"} mt-3`} variant="success">Successfully sent message!</Alert>
            <Alert onClose={() => serror(false)} dismissible className={`${error?"block":"hidden"} mb-3`} variant="danger">Oopsie! Something went wrong!</Alert>
            <div data-aos="fade-right" className={`${darktheme?'bg-black':'bg-white'} drop-shadow-2xl rounded-lg h-auto py-3 px-4`}>
                <h6 className={darktheme?'text-gray-300':''}>Name</h6>
                <input id="name" placeholder='Your name here' className={`border-1 ${darktheme ? "border-white":"border-black"} ${darktheme?'placeholder:text-gray-400 text-white bg-neutral-800':'text-black bg-white'} mb-4 rounded pl-2 py-1 text-sm font-medium`}></input>
                <h6 className={darktheme?'text-gray-300':''}>Email</h6>
                <input id="email" type="email" placeholder='Your email here' className={`border-1 ${darktheme ? "border-white":"border-black"} ${darktheme?'placeholder:text-gray-400 text-white bg-neutral-800':'text-black bg-white'} mb-4 rounded pl-2 py-1 text-sm font-medium`}></input>
                <h6 className={darktheme?'text-gray-300':''}>Message</h6>
                <textarea id="message" type="email" placeholder='Your message here' className={`border-1 ${darktheme ? "border-white":"border-black"} ${darktheme?'placeholder:text-gray-400 text-white bg-neutral-800':'text-black bg-white'} rounded pl-2 py-1 text-sm font-medium w-[208px] h-[10rem]`}></textarea><br/>
                <button onClick={submit} className="rounded-lg px-2 py-1 bg-sky-500 hover:bg-sky-700 text-white">Submit</button>
            </div>
        </div>
    )
}