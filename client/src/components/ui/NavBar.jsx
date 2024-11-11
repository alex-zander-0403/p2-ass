import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavBar({ logoutHandler, user }) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#"> */}
          <svg
            height="50px"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
          </svg>
          {/* </Navbar.Brand> */}
          <Navbar.Brand href="#">
            Привет {user.status === 'logged' ? user.data.name : 'Guest'}
            {user.status === 'logged' ? user.data.balance : ', Зарегистрируйся'}
          </Navbar.Brand>
          <Nav>
            <Link to={'/'} href="#home">
              Home
            </Link>
          </Nav>

          {user.status !== 'logged' && (
            <>
              <Link to={'/signup'} href="#singup">
                Зарегистрироваться
              </Link>
              <Link to={'/login'} href="#login">
                Войти
              </Link>
            </>
          )}
          {user.status === 'logged' && (
            <Button onClick={logoutHandler} variant="danger">
              Выйти
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
}
