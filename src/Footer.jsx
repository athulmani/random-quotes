import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';


function Footer() {
  return (
    <>
    
    <MDBFooter className='text-center text-white mb-0' style={{ backgroundColor: 'transparent',position:"fixed", width:"100%", bottom:"0"}}>
     

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 anotherlevel:
        <a className='text-dark' href='https://mdbootstrap.com/'>
life quotes        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer