import React, { Component } from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import css from "./App.module.css";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncriment = (key) => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      }
    });
  }

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;  
  }

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round(good * 100 / (good + neutral + bad));  
  }

  render() {
    const { good, neutral, bad } = this.state;
    const btnLabelArray = Object.keys(this.state);

    return (
      <div className={css.wrapper}>      
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            btnLabelArray={btnLabelArray}
            onLeaveFeedback={this.handleIncriment}
          />
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={this.countTotalFeedback}
            countPercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

