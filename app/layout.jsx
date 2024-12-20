import LayoutComponent from '../src/veiw/layout';
import './styles.css';

export const viewport = {
    themeColor: '#136394',
};

export const metadata = {
    icons: '/favicon.ico',
    title: `FamTrees`,
    description:
        'A website by a hobbyist who likes to keep up on a variety of technologies while implementing them on here',
    openGraph: {
        title: `FamTrees`,
        description:
            'A website by a hobbyist who likes to keep up on a variety of technologies while implementing them on here',
        url: 'https://famtrees.net',
        images: [{ url: 'https://famtrees.net/case_mtn.jpg' }],
        type: 'website',
    },
};

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body>
                <LayoutComponent>{children}</LayoutComponent>
            </body>
        </html>
    );
}
