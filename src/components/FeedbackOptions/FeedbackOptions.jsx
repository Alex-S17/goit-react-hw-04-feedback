import React from "react";
import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({ btnLabelArray, onLeaveFeedback }) => {
  return (
    <>
      {btnLabelArray.map(btnLabel => (
        <button
          className={css.button}
          type="button"
          key={btnLabel}
          onClick={() => onLeaveFeedback(btnLabel)}
        >
          {btnLabel}
        </button>
      ))}
    </>
  )
};

FeedbackOptions.propTypes = {
  btnLabelArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};










// export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   const btnLabelArray = Object.keys(options);
//   return (
//     <>
//       {btnLabelArray.map(btnLabel => (
//         <button className={css.button} type="button" key={btnLabel} onClick={() => onLeaveFeedback(btnLabel)}>{btnLabel}</button>
//       ))}
//     </>
//   )
// };