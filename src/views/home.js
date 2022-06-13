import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet";
import Event from "../components/event";
import { useHistory } from "react-router-dom";

import "./home.css";
import axios from "axios";
import eventsAPI from "../api/eventsAPI";

const Home = (props) => {
  const navigate = useHistory();
  

  const [loggedIn, setLoggedIn] = useState(false);

  const [allEvents, setEvents] = useState([]);

  useEffect(() => {
    eventsAPI.getAll()
      .then(res => {
        setEvents(res.data)
      })
  },)

  return (
    allEvents
    ? (<>
      <div className="title">
        <br />
        All events
      </div>
      <div className="outer">
        <br />
        <button
          className="nav-button-center"
          onClick={async () => {
            navigate.push("/myevents");
          }}
        >
          My Events
        </button>
      </div>

      <div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {allEvents.map((event) => (
              <tr>
                <td>{event.id}</td>
                <td>{event.header}</td>
                <td>{event.description}</td>
                <td>{event.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="home-container">
        <ul className="list">
          <li className="list-item">
            <span>Text</span>
          </li>
          <li className="list-item">
            <span>Text</span>
          </li>
          <li className="list-item">
            <span>Text</span>
          </li>
        </ul>
        <span className="home-text3">
          <span>Calendar</span>
        </span>
        <button className="button">Button</button>
      </div> */}
    </>)
    : <></>
    
  );
};

export default Home;
