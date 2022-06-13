import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import "./event.css";
import axios from "axios";

const Event = (props) => {
  const [participants, setParticipants] = useState([]);
  const [partName, setPartName] = useState("");

  useEffect(() => {
    getParticipants();
  }, []);

  const getParticipants = async () => {
    const eventId = props.event.id;
    await axios
      .get(`https://gorest.co.in/public/v2/users`)
      .then((res) =>
        setParticipants(res.data.map((participant) => participant.name))
      );
  };

  return (
    <div className="event-container">
      <h1 className="event-text">{props.event.name}</h1>
      <textarea
        placeholder={props.textarea_placeholder}
        value={props.event.description}
        className="event-description textarea"
      ></textarea>
      <div className="event-event-time">
        <input
          type="text"
          placeholder={props.EventTime}
          value={props.event.date}
          className="event-textinput input"
        />
        <button className="event-button button">{props.button1}</button>
      </div>

      <div className="event-event-add-participant">
        <input
          type="text"
          onChange={(e) => setPartName(e.target.value)}
          value={partName}
          placeholder={props.textinput_placeholder1}
          className="event-textinput1 input"
        />
        <button
          className="event-button1 button"
          onClick={() => {
            setParticipants(participants.concat(partName));
            setPartName("");
          }}
        >
          {props.button}
        </button>
      </div>
    </div>
  );
};

Event.defaultProps = {
  EventParticipantsLabel: "Participants",
  textinput_placeholder1: "Shalava",
  button1: "Update",
  EventTime: "12.06.2022T12:43",
  EventName: "Event",
  button: "+",
  textarea_placeholder: "placeholder"
};

Event.propTypes = {
  EventParticipantsLabel: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  button1: PropTypes.string,
  EventTime: PropTypes.string,
  EventName: PropTypes.string,
  button: PropTypes.string,
  textarea_placeholder: PropTypes.string
};

export default Event;
