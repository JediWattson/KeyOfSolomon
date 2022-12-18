import Card from "../src/card";
import Layout from "../src/layout";
import GithubLink from "../src/github-link";

const About = () => {
  return (
    <Layout>
      <Card
        title="Thanks for your interest!"
        subtitle="This is just a fun website to show my abilities in Nextjs, React and Javascript!"
        img={{
          src: "/nicepictureItook.png",
          alt: "A lot of sushi with wasabi and ginger",
          height: 2826,
          width: 2985,
        }}
      />
      <GithubLink />
    </Layout>
  );
};

export default About;
