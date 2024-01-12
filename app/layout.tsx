import './styles.css';

import LayoutComponent from '../src/layout';

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body>
                <LayoutComponent>
                    {children}                
                </LayoutComponent>
            </body>
        </html>
    );
 }