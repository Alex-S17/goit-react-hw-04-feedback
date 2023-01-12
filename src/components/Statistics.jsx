import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = ({ good, neutral, bad, countTotalFeedback, countPercentage }) => (
  <div >
    {countTotalFeedback(good, neutral, bad) > 0
      ? <div className={css.statWrapper}>
        <p className={css.statistics}>Good: {good}</p>
        <p className={css.statistics}>Neutral: {neutral}</p>
        <p className={css.statistics}>Bad: {bad}</p>
        <p className={css.statistics} >Total: {countTotalFeedback(good, neutral, bad)}</p>
        <p className={css.statistics}>Positive feedback: {good > 0 ? countPercentage(good, neutral, bad) : 0}%</p>
        </div>
      : <p className={css.statistics}>There is no feedback</p>}
  </div>  
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,  
  countTotalFeedback: PropTypes.func.isRequired,
  countPercentage: PropTypes.func.isRequired,
};














// export const Statistics = ({state, countTotalFeedback, countPercentage}) => (
//   <>
//   <p>Good: {state.good}</p>
//   <p>Neutral: {state.neutral}</p>
//   <p>Bad: {state.bad}</p>
//   <p>Total: {countTotalFeedback(state)}</p>
//   <p>Positive feedback: {state.good > 0 ? countPercentage(state) : 0}%</p>
//   </>
// );