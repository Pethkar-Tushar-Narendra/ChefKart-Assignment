import React from 'react';
import './FirstNamePopup.css';
const FirstNamePopup = ({ setDataArray, dataArray, firstNameToggle }) => {
  return (
    <div className="popup-container">
      <h2
        onClick={() => {
          setDataArray(
            dataArray.sort((a, b) =>
              a.first_name.toUpperCase() > b.first_name.toUpperCase() ? 1 : -1
            )
          );
          firstNameToggle();
        }}
      >
        Sort By ASC
      </h2>
      <h2
        onClick={() => {
          setDataArray(
            dataArray.sort((a, b) =>
              a.first_name.toUpperCase() > b.first_name.toUpperCase() ? -1 : 1
            )
          );
          firstNameToggle();
        }}
      >
        Sort By DESC
      </h2>
    </div>
  );
};

export default FirstNamePopup;
