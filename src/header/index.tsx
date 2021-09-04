import styles from './styles.module.css'
import { Navbar, Container } from 'react-bootstrap'

function Header() {
    return (      
        <Navbar bg="dark" variant="dark">
            <Container className={styles.title}>
                <Navbar.Brand>
                    The Index of Solomon
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header