import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Head from 'next/head';


const NavBar = props => (
    <>
        <Head>
            <link href="/static/css/prism-okaidia.css" rel="stylesheet" />
            <link href="/static/css/prism-line-numbers.css" rel="stylesheet" />
        </Head>
        <Toolbar>
            <Link href="/" passHref prefetch>
                <Button>Home</Button>
            </Link>
            <Link href="/tutorials" passHref prefetch>
                <Button>Tutorials</Button>
            </Link>
            <Link href="/blog" passHref prefetch>
                <Button>Blog</Button>
            </Link>
            <Link href="/about" passHref prefetch>
                <Button>About</Button>
            </Link>
        </Toolbar>
    </>
);

export default NavBar;

