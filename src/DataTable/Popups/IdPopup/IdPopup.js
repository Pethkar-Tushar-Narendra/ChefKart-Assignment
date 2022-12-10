import React from 'react';
import './IdPopup.css';
const IdPopup = ({ setDataArray, dataArray, idToggle }) => {
  return (
    <div className="popup-container">
      <h2
        onClick={() => {
          setDataArray(
            dataArray.sort((a, b) => (Number(a.id) > Number(b.id) ? 1 : -1))
          );
          idToggle();
        }}
      >
        Sort By ASC
      </h2>
      <h2
        onClick={() => {
          setDataArray(
            dataArray.sort((a, b) => (Number(a.id) > Number(b.id) ? -1 : 1))
          );
          idToggle();
        }}
      >
        Sort By DESC
      </h2>
    </div>
  );
};

export default IdPopup;
