import React from "react";

const TrackersTable = ({trackers}) => {
  return (
    <>
      <h2>Liste des Trackers</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Nom du Tracker</th>
              <th>Début</th>
              <th>Fin</th>
              <th>Durée</th>
            </tr>
          </thead>
          <tbody>
            {trackers.map((tracker, idx) => (
              <tr key={idx}>
                <td>{tracker.name}</td>
                <td>{tracker.starttime}</td>
                <td>{tracker.endtime}</td>
                <td>Durée à calculer</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <h3>
        Il y a {allTrackers.length}{" "}
        {allTrackers.length > 1 ? "trackers" : "tracker"}
        {filterText !== "" ? " (contenant : " + filterText + " )." : "."}
      </h3>

      {allTrackers.map((tracker, id) => (
        <p key={id}>{tracker.name}</p>
      ))} */}
    </>
  );
};

export {TrackersTable};
