import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from 'next/link'


const NavBar = props => (
    <Toolbar>
        <Button size="small">
            <Link prefetch href="/">
                <a style={{textDecoration: 'none', color: 'black'}}>Home</a>
            </Link>
        </Button>
        <Button size="small">
            <Link prefetch href="/tutorials">
                <a style={{textDecoration: 'none', color: 'black'}}>Tutorials</a>
            </Link>
        </Button>
        <Button size="small">
            <Link prefetch href="/blog">
                <a style={{textDecoration: 'none', color: 'black'}}>Blog</a>
            </Link>
        </Button>
        <Button size="small">
            <Link prefetch href="about">
                <a style={{textDecoration: 'none', color: 'black'}}>About</a>
            </Link>
        </Button>
    </Toolbar>
);

export default NavBar;

