import React from 'react';
import './LastNamePopup.css';
const LastNamePopup = ({ setDataArray, dataArray, lastNameToggle }) => {
  return (
    <div className="popup-container">
      <h2
        onClick={() => {
          setDataArray(
            dataArray.sort((a, b) =>
              a.last_name.toUpperCase() > b.last_name.toUpperCase() ? 1 : -1
            )
          );
          lastNameToggle();
        }}
      >
        Sort By ASC
      </h2>
      <h2
        onClick={() => {
          setDataArray(
            dataArray.sort((a, b) =>
              a.last_name.toUpperCase() > b.last_name.toUpperCase() ? -1 : 1
            )
          );
          lastNameToggle();
        }}
      >
        Sort By DESC
      </h2>
    </div>
  );
};

export default LastNamePopup;
