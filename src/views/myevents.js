import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import eventsAPI from "../api/eventsAPI";

const MyEvents = () => {
  const navigate = useHistory();

  const [myEvents, setEvents] = useState([]);

  useEffect(async () => {
    await eventsAPI.getMyEvents().then((res) => {
      console.log(res.data);
      setEvents(res.data);
    }).catch(err => {
      if(err.response.status === 401){
        navigate.push("/login")
      }
    });
  }, []);

  const [isAddWindowOpen, setWindowOpen] = useState(false);
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const [editingEvent, setEditingEvent] = useState();
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDate, setEditDate] = useState("");

  const [usernames, setUsernames] = useState([""]);

  const createEvent = async () => {
    const eventData = {
      header,
      description,
      date: date.toISOString().replace("T", " ").replace(".000Z", ""),
    };
  
    await eventsAPI
      .create(eventData)
      .then(async (_) => {
        await eventsAPI.getMyEvents().then((res) => {
          console.log(res.data);
          setEvents(res.data);
        });

        setHeader("");
        setDescription("");
        setDate(undefined);
        setWindowOpen(false);
      })
      .catch((err) => console.log(err.response));
  };

  return myEvents ? (
    <>
      <div className="title">
        <br />
        My events
      </div>
      <div className="outer">
        <div>
          <br />
          <button
            className="nav-button-center"
            onClick={() => navigate.push("/")}
          >
            Home
          </button>
        </div>
        <div>
          <br />
          <button
            className="nav-button-center"
            onClick={() => {
              localStorage.setItem('token', '')
              navigate.push("/login")
            }}
          >
            Logout
          </button>
        </div>
        {isAddWindowOpen ? (
          <>
            <div>
              <input
                onChange={(e) => setHeader(e.target.value)}
                placeholder="Title"
                className="input-event"
                type="text"
              ></input>
            </div>
            <div>
              <input
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="input-event"
                type="text"
              ></input>
            </div>
            <div>
              <input
                onChange={(e) => setDate(new Date(e.target.value))}
                placeholder="Date"
                className="input-event"
                type="date"
              ></input>
            </div>
            <div>
              <button
                onClick={() => {
                  createEvent();
                }}
                className="nav-button-center"
              >
                Add
              </button>
            </div>
          </>
        ) : (
          <div>
            <br />
            <button
              className="nav-button-center"
              onClick={() => {
                setWindowOpen(true);
              }}
            >
              New Event
            </button>
          </div>
        )}
      </div>

      {editingEvent ? (
        <div className="outer" style={{ flexDirection: "row" }}>
          <div>
            <input
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder={editingEvent.header}
              className="input-event"
              type="text"
            ></input>
          </div>
          <div>
            <input
              onChange={(e) => setEditDescription(e.target.value)}
              placeholder={editingEvent.description}
              className="input-event"
              type="text"
              // value={editDescription}
            ></input>
          </div>
          <div>
            <input
              onChange={(e) => setEditDate(new Date(e.target.value))}
              placeholder={editingEvent.date}
              className="input-event"
              type="date"
              // value={editDate}
            ></input>
          </div>
          <div>
            <button
              onClick={async () => {
                // if (!header && !description && !date) {
                //   setEditingEvent();
                //   return;
                // }
                await eventsAPI.edit(editingEvent.id, {
                  header: editTitle ? editTitle : editingEvent.header,
                  description: editDescription
                    ? editDescription
                    : editingEvent.description,
                  date: editDate
                    ? editDate.toISOString().replace("T", " ").replace(".000Z", "")
                    : editingEvent.date
                }).then(async (_) => {
                  await eventsAPI.getMyEvents().then((res) => {
                    console.log(res.data);
                    setEvents(res.data);
                  });
                  
                  setHeader("");
                  setDescription("");
                  setDate(undefined);
                  setEditDate(undefined);
                  setEditingEvent();
                    })
                // setEvents(
                //   myEvents.concat({
                //     id: myEvents.length,
                //     title: editTitle ? editTitle : editingevent.header,
                //     description: editDescription
                //       ? editDescription
                //       : editingEvent.description,
                //     date: editDate
                //       ? editDate.toISOString().split("T")[0]
                //       : editingEvent.date,
                //   })
                // );
                
              }}
              className="nav-button-center"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <> </>
      )}

      <div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Participation</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {myEvents.map((event, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{event.header}</td>
                <td>{event.description}</td>
                <td>{event.date}</td>
                <td>
                  <ul className="add-participant">
                    <li>
                      <input
                        onChange={(e) =>
                          setUsernames(() => {
                            const username = e.target.value;
                            usernames[index] = username;
                            setUsernames([...usernames]);
                            console.log(usernames);
                          })
                        }
                        placeholder="Username"
                      ></input>
                    </li>
                    <li>
                      <button onClick={async () => {
                        await eventsAPI.addUserToEvent(usernames[index], event.id).then((res) => {
                          alert(res.data)
                        })
                        .catch(err => alert(err.response.status))
                        
                      }}>Add Participant</button>
                    </li>
                  </ul>
                </td>
                <td>
                  <button
                    className="edit-event-button"
                    onClick={() => {
                      setEditingEvent(event);
                    }}
                  >
                    Edit event
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <></>
  );
};

export default MyEvents;
