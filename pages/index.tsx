import PlanetCurrent from "../src/planet-current"
import Header from "../src/header"

function HomePage() {
	return (
		<>
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