import { Table } from 'react-bootstrap'

function Checker({ darktheme, show, open }) {
    return (
        <div className='h-screen'>
            <div data-aos="zoom-in-up" className="container flex justify-center items-center flex-col">
                <h1 className={`mt-8 text-center ${darktheme ? 'text-white':'text-black'}`}>MD5 Hash Checker</h1>
                <label for="string" className={`mt-2.5 font-medium text-center ${darktheme ? 'text-white':'text-black'}`}>Use this input box to check an MD5 Hash</label><br></br>
                <input autoComplete='off' name="string" id="string" type="name" className={`px-2 transition delay-150 resize-none overflow-x-auto whitespace-nowrap w-1/2 h-10 drop-shadow-lg border-gray-200 border-2 rounded focus:outline-none focus:ring ${darktheme ? 'focus:ring-blue-400':'focus:ring-blue-200'}`}></input>
                <button className={`mt-4 ${darktheme ? 'text-white':'text-black'}`} onClick={show}>Check →</button>
                <div className={`flex justify-center items-center w-25 mt-4 ${open ? 'visible':'invisible'}`}>
                    <Table striped bordered className="asdj" variant={`${darktheme ? 'dark':'light'}`}>
                        <tbody className="w-16">
                            <tr>
                                <td className="w-4">Validity</td>
                                <td className="w-8" id="checkvalue">True</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Checker;