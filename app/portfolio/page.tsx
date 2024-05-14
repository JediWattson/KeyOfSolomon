import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import('../../src/portfolio'), { ssr: false })

function PortfolioPage() {
    return <Portfolio />;
}

export default PortfolioPage;
