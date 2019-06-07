import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



class Topic extends React.Component {


    showQuestions = (category) => {
        return this.props.questions[category].map((el) => el.prompt);
    }


    render() {

        return (
            <div>
                
                
                {this.props.match.params.topic === '0' && 
                <h1>HTML</h1>
                }
                {this.props.match.params.topic === '1' && 
                <h1>CSS</h1>
                }
                {this.props.match.params.topic === '2' && 
                <h1>JS</h1>
                }
                {this.showQuestions(`category${this.props.match.params.topic}`)[this.props.match.params.question]}
            </div>
        );
    }
}



export default Topic;