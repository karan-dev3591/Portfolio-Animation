import React from 'react'
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap'

const Header = () => {

     const activeStyle = {
        
        color: "#FF0000",
     };

  return (
    <div className='header'>
     
     <Navbar expand="lg" fixed='top'>
     <Container>
        <Navbar.Brand >Karan Pa </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
             <Nav className='ml-auto'>
                <Nav.Link href='/' className='nav-link' styles ={({isActive}) => (isActive ? activeStyle : undefined)}>Home</Nav.Link>
                <Nav.Link href='/about'className='nav-link' styles={({isActive}) => (isActive ? activeStyle : undefined)}>About</Nav.Link>
                <Nav.Link href='/project' className='nav-link' styles ={({isActive}) => (isActive ? activeStyle : undefined)} >Project</Nav.Link>
                <Nav.Link href='/contact' className='nav-link' styles ={({isActive}) => (isActive ? activeStyle : undefined)} >Contact</Nav.Link>
             </Nav>

        </Navbar.Collapse>
     </Container>
     </Navbar>

    </div>
  )
}

export default Header