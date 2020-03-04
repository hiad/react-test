import React from "react";
import UserList from './components/UserList/UserList';
import UserCreation from './components/UserCreation/UserCreation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ModalProvider } from "react-modal-hook";

import './App.css';
import { Navbar as BaseNavBar, NavbarBrand, Container } from 'reactstrap';
import styled from 'styled-components';


const Navbar = styled(BaseNavBar)`
  padding-bottom: 1em;
`;

const App = () => {

  return (
    <>
      <Navbar color="light" light>
        <NavbarBrand
          href="https://www.linkedin.com/in/hectorhiad/"
          className="mr-auto">
          React Test - Hector Alcazar
    </NavbarBrand>
      </Navbar>
      <Container>
        <Router>
          <ModalProvider>
            <Switch>
              <Route
                exact
                path="/"
                component={UserList} />
              <Route
                path="/add"
                component={UserCreation} />
            </Switch>
          </ModalProvider>
        </Router >
      </Container>
    </>
  );

}

export default App;
