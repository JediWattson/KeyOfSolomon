import Portfolio from "../../src/portfolio";

const handleInit = async (setManifest) => {
    'use server'

    const res = await fetch(`${process.env.R2_BUCKET_URL}/manifest.json`, { next: { revalidate: 3000 }})
    const assetManifest = await res.json()
    return assetManifest.map(asset => ({ ...asset, url: `${process.env.R2_BUCKET_URL}/${asset.object}`  }))
} 

export const metadata = {
    openGraph: {
        title: "Famtrees - Portfolio",
        description: `Here's a showcase of some 3d assets I've been working on`,
        images: [
            { url: "https://famtrees.net/demon-gallon.png" }
        ]
    }
}

async function PortfolioPage() {    
    const assetManifest = await handleInit()
    return (
        <Portfolio assetManifest={assetManifest} />
    )
}

export default PortfolioPage;
