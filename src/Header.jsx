import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <marquee behavior="" direction="">
        <Navbar className="bg-transparent">
        <Container>
          <Navbar.Brand href="#home">
            <h2>

            <i class="fa-solid fa-quote-left" ></i>
QUOTES

            </h2>
         
          </Navbar.Brand>
        </Container>
      </Navbar>
      </marquee>
    </>
  )
}

export default Header