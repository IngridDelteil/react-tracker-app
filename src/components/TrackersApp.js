import React, {useState} from "react";
import {FilterTrackers} from "./FilterTrackers";
import {TrackersTable} from "./TrackersTable";
import db from "../data";

const TrackersApp = () => {
  const [allTrackers, setAllTrackers] = useState(db);
  const [filterText, setFilterText] = useState("");
  //   const [selectedTracker, setSelectedTracker] = useState({});

  const handleTextChange = (text) => {
    setFilterText(text);
    const filteredTrackers = db.filter(
      (track) => track.name.toLowerCase().indexOf(text) !== -1
    );
    setAllTrackers(filteredTrackers);
  };

  return (
    <>
      <FilterTrackers
        onTextChange={handleTextChange}
        initialFilter={filterText}
      />
      <TrackersTable trackers={allTrackers} />
    </>
  );
};

export {TrackersApp};
