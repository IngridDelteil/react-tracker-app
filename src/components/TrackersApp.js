import React, {useState} from "react";
import {FilterTrackers} from "./FilterTrackers";
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
      <FilterTrackers onTextChange={handleTextChange} />
      <div>
        <h3>
          Il y a {allTrackers.length}{" "}
          {allTrackers.length > 1 ? "trackers" : "tracker"}
          {filterText !== "" ? " (contenant : " + filterText + " )." : "."}
        </h3>

        {allTrackers.map((tracker, id) => (
          <p key={id}>{tracker.name}</p>
        ))}
      </div>
    </>
  );
};

export {TrackersApp};
