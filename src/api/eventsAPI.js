import axios from "axios";

const baseURL = "http://localhost:8778/api/v1";

const eventsRoute = `${baseURL}/events`;
const systemRoute = `${baseURL}/system`;

const eventsAPI = {
    addUserToEvent: (username, eventId) =>
    axios.post(systemRoute +'/'+ username, {eventId}, {
      headers: { Authorization: localStorage.getItem("token") },
    }),

  create: (eventData) =>
    axios.post(eventsRoute, eventData, {
      headers: { Authorization: localStorage.getItem("token") },
    }),

  edit: (id, eventData) =>
    axios.put(eventsRoute + '/' + id, eventData, {
      headers: { Authorization: localStorage.getItem("token") },
    }),

  getMyEvents: () =>
    axios.get(systemRoute, {
      headers: { Authorization: localStorage.getItem("token") },
    }),

  getAll: () =>
    axios.get(eventsRoute),
};

export default eventsAPI;
