import Info from "../src/info";
import { handleSession } from "../src/lib/utils";

function HomePage() {
  handleSession('Home')
  return <Info />
}

export default HomePage;
