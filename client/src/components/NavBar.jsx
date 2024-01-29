import { useContext } from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext)
  return (
    <>
      <Navbar bg="dark" className="mb-4" style={{ heigit: "3.75rem" }}>
        <Container>
          <h2>
            <Link to="/" className="text-decoration-none link-light">ChatApp</Link>
          </h2>
          {user && <span className="text-warning">Logged in as {user?.name}</span>}
          <Nav>
            <Stack direction="horizontal" gap={3}>
              {
                user && (<>
                  <Link onClick={() => logoutUser()} to="/login">Logout</Link>
                </>)
              }
              {
                !user && (<>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>)
              }
            </Stack>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;