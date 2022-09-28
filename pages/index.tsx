import Head from 'next/head'
import PlanetCurrent from "../src/info"
import Header from "../src/header"

function HomePage() {
	return (
		<>
			<Head>
				<title>{`Solomon's Index`}</title>
				<meta name="theme-color" content="#136394" />
				<link rel="shortcut icon" href="https://cdn2.iconfinder.com/data/icons/keys-line-style/120/key-19-512.png"/>
			</Head>
			<style jsx global>{`
				body { 
					background: #136394;
				}
				p {
					color: #FFF;
				}
			`}</style>
			<Header/>
			<PlanetCurrent/>
		</>
	)
}

export default HomePage