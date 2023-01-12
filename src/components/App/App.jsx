import React, { useState } from "react";
import { Statistics } from "../Statistics/Statistics";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Section } from "../Section/Section";
import css from "./App.module.css";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = (lable) => {
    switch (lable) {
      case 'good':
        setGood(prevState => (prevState + 1));
        break;
      case 'neutral':
        setNeutral(prevState => (prevState + 1));
        break;
      case 'bad':
        setBad(prevState => (prevState + 1));
        break;
      default: break;
    };
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;  
  }

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round(good * 100 / (good + neutral + bad));  
  }
    
  const btnLabelArray = ['good', 'neutral', 'bad'];
  return (
    <div className={css.wrapper}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          btnLabelArray={btnLabelArray}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={countTotalFeedback}
          countPercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
};

