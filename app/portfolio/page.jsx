import dynamic from "next/dynamic";
import Head from "next/head";
import Portfolio from "../../src/portfolio";

function PortfolioPage() {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta property="og:title" content="A portfolio of work" />
                <meta
                    property="og:description"
                    content="Here is a work in progress for my collection of assets"
                />
            </Head>
            <Portfolio />
        </>
    )
}

export default PortfolioPage;
