import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { match } from "minimatch";
import { Redirect } from 'react-router-dom';
import Quiz from '../Quiz';
import Topic from '../Topic';
import Menu from '../Menu';
import questions from '../questions';

class App extends React.Component {

  state = {
    question: questions

  }

  render() {
    return (
      <div>
        <Router>
<div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">

                    <Link className="nav-link" to='/game'>Game</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/game'>Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/game'>LogOut</Link>
                </li>
            </ul>
<br/>
</div>

          {/* <Route exact path='/' component={} /> */}
          <Route exact path='/game' component={Quiz} />
          <Route path='/game/:topic/:question' render={(props) => <Topic {...props} questions={this.state.question} />} />
        </Router>

      </div>
    );
  }
}




export default App;