import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" className="mb-4" style={{ heigit: "3.75rem" }}>
        <Container>
          <h2>
            <Link to="/" className="text-decoration-none link-light">ChatApp</Link>
          </h2>
          <span className="text-warning">Logged in as Aleksandar</span>
          <Nav>
            <Stack direction="horizontal" gap={3}>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </Stack>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;