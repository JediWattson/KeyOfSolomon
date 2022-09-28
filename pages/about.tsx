
import GithubLink from "../src/github-link"
import { Card } from "react-bootstrap"
import Layout from "../src/layout"

const About = () => {
    return (
        <Layout>
            <Card text="light" bg="secondary" style={{ margin: "16px 0", padding: 8 }}>
                <Card.Title>
                    {`Thanks for your interest!`}
                </Card.Title>    
                <Card.Text>{`
                    I started this website after watching Doctor Strange and seeing him reading a book of magic called "Solomon's Key". This got me to do some research into the book and hope to unlock some of the universal mysteries. However I was shown what can be useful times to determine when to conduct onself if parsed correctly. So I broke up some of the musings into arrays and used the current time to determine at what planet is strongest and a description of the energy as in the book. 
                `}</Card.Text>
            </Card>
            <GithubLink />
        </Layout>
    )
}

export default About