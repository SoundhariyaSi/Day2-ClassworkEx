import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import apple2 from './apple2.jpg'



function NavApp() {
  return (
    <div className='div1'>
        
      <Navbar bg="light" variant="primary">
        <Container>
          <Navbar.Brand href="https://www.apple.com/in/store"><img src={apple2} width={100} height={75} alt=""/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.apple.com/in/shop/buy-iphone"><b>iPhone 14 Pro</b></Nav.Link>
            <Nav.Link href="https://www.apple.com/in/shop/buy-iphone"><b>iPhone SE</b></Nav.Link>
            <Nav.Link href="https://www.apple.com/in/ipad-pro/"><b>iPad pro</b></Nav.Link>
            <Nav.Link href="https://www.apple.com/in/ipad-mini/"><b>iPad Mini</b></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  
      
    </div>
  )
}
export default NavApp
