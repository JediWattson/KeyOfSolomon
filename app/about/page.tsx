import About from "../../src/about";
import { handleSession } from "../../src/lib/utils";

const AboutPage = () => {
  handleSession('About')
  return <About />;
};

export default AboutPage;
