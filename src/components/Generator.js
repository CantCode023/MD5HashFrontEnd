import { Table } from 'react-bootstrap'

function Generator({ darktheme, show, open, copy }) {
    return (
        <div className='h-screen'>
            <div data-aos="zoom-in-up" className="container flex justify-center items-center flex-col">
                <h1 className={`mt-8 text-center ${darktheme ? 'text-white':'text-black'}`}>MD5 Hash Generator</h1>
                <label for="string" className={`mt-2.5 font-medium text-center ${darktheme ? 'text-white':'text-black'}`}>Use this input box to generate an MD5 Hash</label><br></br>
                <input autoComplete='off' name="string1" id="string1" type="name" className={`px-2 transition delay-150 resize-none overflow-x-auto whitespace-nowrap w-1/2 h-10 drop-shadow-lg border-gray-200 border-2 rounded focus:outline-none focus:ring ${darktheme ? 'focus:ring-blue-400':'focus:ring-blue-200'}`}></input>
                <button className={`mt-4 ${darktheme ? 'text-white':'text-black'}`} onClick={show}>Generate →</button>
                <div className={`flex justify-center items-center w-1/2 mt-4 ${open ? 'visible':'invisible'}`}>
                    <Table responsive striped bordered className="asdj" variant={`${darktheme ? 'dark':'light'}`}>
                        <tbody className="">
                            <tr>
                                <td className="">Your String</td>
                                <td className="" id="stringvalue">String Example</td>
                            </tr>
                            <tr>
                                <td className="">MD5 Hash</td>
                                <td className="" id="hashvalue">MD5 Example</td>
                            </tr>
                        </tbody>
                    </Table><button onClick={copy} className={`transition duration-250 relative top-[0.8rem] ml-2 text-right border-2 rounded ${darktheme ? 'border-white':'border-black'} px-3 py-2 text-sm ${darktheme?'text-white ':'text-black'}`}>Copy</button>
                </div>
            </div>
        </div>
    );
}

export default Generator;