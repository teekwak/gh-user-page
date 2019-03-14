import React from 'react';
import Head from 'next/head';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => (
  <>
    <Head>
      <link href="/static/css/prism-okaidia.css" rel="stylesheet" />
      <link href="/static/css/prism-line-numbers.css" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
        crossOrigin="anonymous"
      />
    </Head>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/tutorials">Tutorials</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  </>
);

export default NavBar;
