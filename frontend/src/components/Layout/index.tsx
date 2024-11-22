import { Outlet } from 'react-router-dom'
import { CustomNavbar } from '../home/Navbar'
import { Container } from 'react-bootstrap'

const Layout = () => {
  return (
    <>
      <CustomNavbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout