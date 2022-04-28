import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Component } from 'react';
import './App.css';
import Favorite from './components/Favourites/favourite'
import Home from './components/Home/home'
import { Routes, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Container fluid="md">

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Favorite Dogs</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/favorite">Favorites</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/favorite' element={<Favorite />} />
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Routes>
        </div>
      </Container>
    );
  }
}



export default App;
