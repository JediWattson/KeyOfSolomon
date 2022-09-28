import React from 'react';

import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Header from '../header';

const Layout = ({ children }) => {
    return (
        <>
            <style jsx global>{`
				body { 
					background: #136394;
				}
				p {
					color: #FFF;
				}
			`}</style>
            <Head>
				<title>{`Solomon's Index`}</title>
				<meta name="theme-color" content="#136394" />
				<link rel="shortcut icon" href="https://cdn2.iconfinder.com/data/icons/keys-line-style/120/key-19-512.png"/>
			</Head>
			<Header/>
            <Container>
                {children}
            </Container>
            
        </>
    )
}

export default Layout