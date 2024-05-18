import Head from "next/head";
import Portfolio from "../../src/portfolio";

const handleInit = async (setManifest) => {
    const res = await fetch(`${process.env.R2_BUCKET_URL}/manifest.json`)
    const assetManifest = await res.json()
    return assetManifest.map(asset => ({ ...asset, url: `${process.env.R2_BUCKET_URL}/${asset.object}`  }))
} 

async function PortfolioPage() {    
    const assetManifest = await handleInit()
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
            <Portfolio assetManifest={assetManifest} />
        </>
    )
}

export default PortfolioPage;
