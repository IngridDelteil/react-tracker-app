import React, {useState} from "react";
import db from "../data";

const TrackersApp = () => {
  const [allTrackers, setAllTrackers] = useState(db);
  const [filterText, setFilterText] = useState("");
  const [selectedTracker, setSelectedTracker] = useState({});
  return (
    <div>
      <h3>Il y a {allTrackers.length} trackers.</h3>
      {allTrackers.map((tracker, id) => (
        <p key={id}>{tracker.name}</p>
      ))}
    </div>
  );
};

export {TrackersApp};
