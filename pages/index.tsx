import PlanetCurrent from "../src/info";
import Layout from "../src/layout";

import { planets } from "../src/info/constants";

function HomePage() {
  return (
    <Layout>
      <PlanetCurrent />
    </Layout>
  );
}

export default HomePage;
