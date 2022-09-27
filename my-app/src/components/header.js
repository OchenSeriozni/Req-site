import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import About from '../Pages/about.js'
import Home from '../Pages/home.js'
import Blog from '../Pages/blog.js'
import Contacts from '../Pages/contacts.js'

function Heder() {
  return (
    <>
      <Navbar fixed='top' bg="dark" variant="dark" expand="lg" className=''>
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            React Bootstrap
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About us</Nav.Link>
            <Nav.Link href="#">Contacts</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Router>
      <Routes>
      <Route exact path='/home' element={<Home/>} />
      <Route exact path='/aboutus' element={<About/>} />
      <Route exact path='/contacts' element={<Contacts/>} />
      <Route exact path='/blog' element={<Blog/>} />
      </Routes>
    </Router>
    </>
  );
}
export default Heder;