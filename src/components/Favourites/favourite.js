import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import { Component } from 'react';
import '../../App.css';
import Doglist from '../Doglist/Doglist'

class Favorite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favs: [],
            showCheck: true
        }
    }
    componentDidMount() {
        var favitems = localStorage.getItem("favs")
        if (favitems === null) {
            favitems = []
        } else {
            favitems = JSON.parse(favitems);
        }
        this.setState({
            favs: favitems
        })
    }
    render() {
        return (
            <div >
                <Doglist dogs={this.state.favs} display={this.state.showCheck}></Doglist>
                <Navbar bg="dark" fixed="bottom" >
                    <Container>
                        <Navbar.Brand href="#"></Navbar.Brand>
                    </Container>
                </Navbar>

            </div>
        )
    }
}
export default Favorite