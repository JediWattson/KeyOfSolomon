'use client';
import { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pathLinks } from '../../lib/constants';
import styles from './styles.module.css';

function Header() {
    const path = usePathname();
    const links = pathLinks.filter(({ path: titlePath }) => path !== titlePath);

    return (
        <div className={styles.header}>
            <h2 className={styles.title}>{'FamTrees'}</h2>
            <div className={styles.linkGroup}>
                {links.map(({ path, title }, i) => (
                    <Fragment key={i}>
                        <Link className={styles.button} href={path}>
                            {title}
                        </Link>
                        {i < links.length - 1 && (
                            <span className={styles.divider}>|</span>
                        )}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default Header;
