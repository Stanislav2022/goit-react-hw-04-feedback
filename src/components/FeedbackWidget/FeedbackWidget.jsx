import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
import React from 'react'
import { useState } from "react";

export default function FeedbackWidget() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
     const [bad, setBad] = useState(0);   

    const countTotal = () => {
        return good + neutral + bad;
    }
    const countPositivePercentage = (property) => {
        const total = countTotal();
        if (!total) {
            return 0;
        }
        const value = property;
        const result = (value / total) * 100;
            return Number(result.toFixed(0))
     }

    const onLeaveFeedback = (propertyName) => {
        switch (propertyName) {
            case "good":
                setGood((prev) => prev + 1);
                break;
            case "neutral":
                setNeutral((prev) => prev + 1);
                break;
            case "bad":
                setBad((prev) => prev + 1);
                break;            
            default:
                break;
        }
    }

    const total = countTotal()
    const positivePercentage = countPositivePercentage(good)
   
  return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={Object.keys()}/>
                </Section>
                <Section title="Statistics">
                    {!total ? <Notification text="There is no feedback" /> :
                        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />}
                </Section>
            </div>
  )
}





