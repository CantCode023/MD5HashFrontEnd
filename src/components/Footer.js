import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function Footer({ darktheme }) {
  return (
    <MDBFooter className={`text-center ${darktheme ? 'text-light':'text-dark'}`} style={darktheme ? { backgroundColor: '#010101' }:{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <a
            className={`btn btn-floating btn-lg ${darktheme ? 'text-light':'text-dark'} m-1`}
            href='https://twitter.com/CantCode023'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </a>

          <a
            className={`btn btn-floating btn-lg ${darktheme ? 'text-light':'text-dark'} m-1`}
            href='mailto:cantcode023@gmail.com'
            role='button'
          >
            <MDBIcon fas icon='envelope' />
          </a>

          <a
            className={`btn btn-floating btn-lg ${darktheme ? 'text-light':'text-dark'} m-1`}
            href='https://github.com/CantCode023'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </a>
        </section>
        <MDBRow>
          <MDBCol lg='12' md='12' className='mb-8 mb-md-0'>
            <h5 className={`text-uppercase ${darktheme ? 'text-light':'text-dark'} `}>MD5 Hash</h5>

            <p className={darktheme ? 'text-light':'text-dark'}>
              Checks and converts MD5 hashes.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className={`text-center ${darktheme ? 'text-light':'text-dark'} p-3 py-8`} style={darktheme ? { backgroundColor: 'rgba(255,255,255,0.2)' }:{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
        © {new Date().getFullYear()} Copyright:
        <a className={darktheme ? 'text-light':'text-dark'} href='https://cantcode023.github.io/FollowCantCode/'> CantCode </a>
      </div>
    </MDBFooter> 
  );
}