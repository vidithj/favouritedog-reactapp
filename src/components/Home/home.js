import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Button } from 'react-bootstrap';
import { Component } from 'react';
import '../../App.css';
import Doglist from '../Doglist/Doglist'


const baseUrl = "https://random.dog/woof.json"
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dogs: [],
            showCheck: false
        }
    }
    generateURLS() {
        var promiseArr = [];
        for (var i = 0; i < 6; i++) {
            promiseArr.push(fetch(baseUrl));
        }
        return promiseArr
    }
    filterURLs(woofObjects) {
        const filteredArr = woofObjects.map(woofObj => woofObj.url);
        return filteredArr
    }
    resetLocalstorage = (e) => {
        localStorage.removeItem("favs");
    }
    getWoofData = (e) => {
        var requests = this.generateURLS()
        Promise.all(requests)
            .then(responses => Promise.all(responses.map(r => r.json())))
            .then(woofObjects => {
                console.log(woofObjects)
                this.setState({
                    dogs: this.filterURLs(woofObjects)
                })

            })
            .catch(err => console.log(err));
    }
    componentDidMount() {
        if (this.first) return; this.first = true;
        console.log("componentDidMount")
        this.getWoofData()
    }
    render() {
        return (
            <div>
                <Doglist dogs={this.state.dogs} display={this.state.showCheck}></Doglist>
                <br></br><br></br>
                <div style={{ textAlign: 'center' }}><Button variant="info" onClick={this.getWoofData}>Refresh</Button></div>
                <Navbar bg="dark" fixed="bottom" >
                    <Container>
                        <Navbar.Brand href="#"></Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        );
    }
}



export default Home;
