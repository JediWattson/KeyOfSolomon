import Head from 'next/head'
import PlanetCurrent from "../src/planet-current"
import Header from "../src/header"

function HomePage() {
	return (
		<>
			<Head>
				<title>Solomon's Index</title>
				<link rel="shortcut icon" href="https://cdn2.iconfinder.com/data/icons/keys-line-style/120/key-19-512.png"/>
			</Head>
			<style jsx global>{`
				body { 
					background: #136394;
					color: #c2ada7;					
				}
			`}</style>
			<Header/>
			<PlanetCurrent/>
		</>
	)
}

export default HomePage