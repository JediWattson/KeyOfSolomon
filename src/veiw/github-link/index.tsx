import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';

const githubLogo =
    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';

const GithubLink = () => {
    return (
        <Link
            className={styles.link}
            href={'https://github.com/JediWattson/KeyOfSolomon'}
        >
            {`Checkout the code`}
            <Image src={githubLogo} alt="Github Logo" width={24} height={24} />
        </Link>
    );
};

export default GithubLink;
