import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'



class Topic extends React.Component {

    state = {
        checking: ''
    }

    routeChange() {
        let path = `/game`;
        this.props.history.push(path);
      }

    showQuestions = (category) => {
        return this.props.questions[category].map((el) => el.prompt);
    }

    showAnswers = (category) => {
        return this.props.questions[category].map((el) => <li>{el.options}</li>)
    }

    showCorrectAnswer = (category) => {
        return this.props.questions[category].map((el) => el.correctAnswer)
    }

    checkAnswer = async (e) => {

        await this.setState({
            checking: e.target.value
        })
        console.log('>>>>>', this.state.checking)

    }

    confirm = (e) => {
        e.preventDefault();
        console.log('confirm>>>>', this.state.checking)
        console.log(this.showCorrectAnswer(`category${this.props.match.params.topic}`)[this.props.match.params.question]);
        
        if (this.state.checking == this.showCorrectAnswer(`category${this.props.match.params.topic}`)[this.props.match.params.question]) {
            alert('Правильно')
            this.routeChange();
        } else {alert('Неправильно')
        this.routeChange();
    }

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
                <hr></hr>
                <form >
                    {this.showAnswers(`category${this.props.match.params.topic}`)[this.props.match.params.question]
                        .props.children.map(el => <li>{el}
                            <input onChange={this.checkAnswer} type="radio" name="q" value={el} /></li>)}
                    <button onClick={(e) => this.confirm(e)}>Confirm</button>
                </form>

            </div>
        );
    }
}



export default Topic;