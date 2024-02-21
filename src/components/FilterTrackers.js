import React from "react";

const FilterTrackers = ({onTextChange}) => {
  const handleChange = (event) => {
    onTextChange(event.target.value);
  };
  return (
    <div className='component-search-input'>
      <h2>Recherche de Trackers</h2>
      <div>
        <input
          type='text'
          placeholder='Libellé du Tracker'
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export {FilterTrackers};
