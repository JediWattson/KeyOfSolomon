import Planetarium from "../../src/planetarium";
import { handleSession } from "../../src/lib/utils";

function PlanetariumPage() {
    handleSession('Planetarium')
    return <Planetarium />;
}

export default PlanetariumPage;
