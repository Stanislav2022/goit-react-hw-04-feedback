import { Component } from "react";
import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";

export default class FeedbackWidget extends Component {
    state = {
     good: 0,
     neutral: 0,
     bad: 0
    }

    countTotal() {
        const { good, neutral, bad } = this.state
        return good + neutral + bad;
    }
    countPositivePercentage(propertyName) {
        const total = this.countTotal();
        if (!total) {
            return 0;
        }
        const value = this.state[propertyName];
        const result = (value / total) * 100;
            return Number(result.toFixed(0))
     }

    onLeaveFeedback = (propertyName) => {
        this.setState((prevState) => {
            const value = prevState[propertyName];
            return {
                [propertyName]: value + 1
            }
      })  
    }
   
    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotal()
        const positivePercentage = this.countPositivePercentage('good')
        return (    
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options={Object.keys(this.state)}/>
                </Section>
                <Section title="Statistics">
                    {!total ? <Notification text="There is no feedback" /> :
                        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />}
                </Section>
            </div>
        )
    }
                
}