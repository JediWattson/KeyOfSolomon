import PlanetCurrent from "../components/planet-current"
import Header from "../components/header"

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


// background: "#136394"

export default HomePage