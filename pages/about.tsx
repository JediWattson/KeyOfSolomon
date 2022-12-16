import { Card, Figure, Stack } from "react-bootstrap";

import Layout from "../src/layout";
import GithubLink from "../src/github-link";

const About = () => {
  return (
    <Layout>
      <Stack gap={3}>
        <Card text="light" bg="secondary">
          <Card.Title>{`About`}</Card.Title>
          <Card.Text>{`
                        Thanks for your interest! This is just a fun website to show my abilities in Nextjs, React and Javascript!
                    `}</Card.Text>
          <Card.Img
            src="/nicepictureItook.png"
            alt="waterfalls behind a gate"
          />
        </Card>
        <GithubLink />
      </Stack>
    </Layout>
  );
};

export default About;
