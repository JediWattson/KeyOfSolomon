import { Navbar, Container } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.css";

function Header() {
  const router = useRouter();
  return (
    <Navbar bg="dark" variant="dark">
      <Container className={styles.title}>
        <Navbar.Brand>{`The Index of Solomon`}</Navbar.Brand>
        <Navbar.Brand>
          {router.asPath === "/about" ? (
            <Link href="/">{"Home"}</Link>
          ) : (
            <Link href="/about">{"About"}</Link>
          )}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
