import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { match } from "minimatch";
import { Redirect } from 'react-router-dom'

class App extends React.Component {
  state = {
    restaurants: []
  }
  async componentDidMount() {
    let response = await fetch('/api/allRests',
    {method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }})
    let jsonRes = await response.json()
    
    this.setState({
      restaurants: jsonRes
    })
  }
  //debugger;

  render() {
    return (

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <hr />


          <Route exact path='/' render={() => <Home res={this.state.restaurants} />} />
          <Route path='/restaurant/:id' render={(props) => <Restaurant {...props} res={this.state.restaurants} />} />
          <Route path="/login" component={Login} />
          {/* <Route path="/reviews" component={Reviews} /> */}

        </div>
      </Router>
    );
  }
}

class Home extends React.Component {

  state = {
    one: ''
  }

  ShowRestaurants = () => {
    return this.props.res.map(el => <ul><li>
      <Link to={`/restaurant/${el.id}`}>{el.name}</Link>
    </li></ul>)
  }

  render() {
    return (
      <div>

        <h2>All restaurants:</h2>
        {this.ShowRestaurants()}
      </div>
    );
  }
}


function Login(props) {
  return (
    <div>
      <p>
        <h2>Login</h2>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                <Input type="password" name="password" id="examplePassword" placeholder="password" />
                <Button color="danger">Login</Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </p>
    </div>
  );
}


export default App;