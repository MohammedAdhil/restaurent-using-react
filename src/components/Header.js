import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
            //   src="https://i.postimg.cc/qR7Rpt3n/3903248.jpg"
            src="https://i.postimg.cc/KzbWTLNk/logo.jpg"
            // src="https://i.postimg.cc/W1b0f7N6/chef.jpg"
              width="80"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Coffee Club
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
