import React, { Component } from "react";
import { Container, Nav, Navbar, Form, FormControl, Button, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './Screenshot_2.png';
import HomePage from '../pages/HomePage.jsx';
import About from '../pages/About';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from "../pages/LoginPage";
import Rules from "../pages/Rules";


import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/slices/userSlice';




const Header = () => {

 const { isAuth, email } = useAuth();

 const dispatch = useDispatch();

 return isAuth ? ( //проверка авторизации пользователся
  <div>
   <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
    <Container>
     <Navbar.Brand href="/"> {/* логотип*/}
      <img
       src={logo}
       height="100"
       width="100"
       className="d-inline-block align-top"
       alt="Logo"
      />
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
       <Nav.Link href="/"> Главная </Nav.Link>  {/* элементы шапки*/}
       <Nav.Link href="/about"> Форум </Nav.Link>
       <Nav.Link href="/rules"> Правила </Nav.Link>
      </Nav>



      <div className="me">
       <Button
        onClick={() => dispatch(removeUser())} // выход из профиля
       >Log out from {email}</Button>
      </div>


     </Navbar.Collapse>
    </Container>
   </Navbar>

   <Router>
    <Switch>
     <Route exact path="/" component={HomePage} /> {/* Роутинг */}
     <Route exact path="/about" component={About} />
     <Route exact path="/login" component={LoginPage} />
     <Route exact path="/rules" component={Rules} />
     <Route exact path="/register" component={RegisterPage} />
    </Switch>
   </Router>
  </div>
 ) : (
  <div>
   <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
    <Container>
     <Navbar.Brand href="/">
      <img
       src={logo}
       height="100"
       width="100"
       className="d-inline-block align-top"
       alt="Logo"
      />
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
       <Nav.Link href="/"> Главная </Nav.Link> {/* элементы шапки*/}
       <Nav.Link href="/about"> Форум </Nav.Link>
       <Nav.Link href="/rules"> Правила </Nav.Link>
      </Nav>
      <div className="me">
       <Row className="login" >
        <Col sm={4}>
         <Button onClick={event => window.location.href = '/login'} variant="primary">Вход</Button> {/* кнопка вход*/}
        </Col>
        <Col sm={1}>
         <Button onClick={event => window.location.href = '/register'} variant="outline-light">Регистрация</Button> {/* кнопка регистрации*/}
        </Col>
       </Row>
      </div>
     </Navbar.Collapse>
    </Container>
   </Navbar>

   <Router>
    <Switch>
     <Route exact path="/" component={HomePage} />
     <Route exact path="/about" component={About} /> {/* роутинг*/}
     <Route exact path="/login" component={LoginPage} />
     <Route exact path="/rules" component={Rules} />
     <Route exact path="/register" component={RegisterPage} />
    </Switch>
   </Router>
  </div>
 )

}

export default Header