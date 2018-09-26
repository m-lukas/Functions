import React, { Component } from "react";
import "./App.css";
import fire from "./config/Fire";

class CreateAnEvent extends Component {
  constructor(props) {
    super(props);
    this.createAnEvent = this.createAnEvent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      eventImage: "",
      eventTitle: "",
      eventDescription: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  createAnEvent(e) {
    e.preventDefault();
    fire
      .database()
      .ref("events")
      .push(this.state);
    this.setState({
      eventTitle: "",
      eventDescription: "",
      eventImage: ""
    });
  }

  render() {
    return (
      <div>
        <h1>Create an Event</h1>
        <form>
          <div class="form-group">
            <label for="InputEventTitle">Title</label>
            <input
              value={this.state.eventTitle}
              onChange={this.handleChange}
              type="text"
              name="eventTitle"
              class="form-control"
              id="InputEventTitle"
              placeholder="Enter the name of the Event"
              required
            />
          </div>
          <div class="form-group">
            <label for="InputEventDescription">Description</label>
            <textarea
              value={this.state.eventDescription}
              onChange={this.handleChange}
              type="textarea"
              name="eventDescription"
              class="form-control"
              id="InputEventDescription"
              placeholder="Enter a description of the event"
              required
            />
          </div>
          <div class="form-group">
            <label for="InputEventImage">Image</label>
            <input
              value={this.state.eventImage}
              onChange={this.handleChange}
              type="file"
              accept="image/*"
              name="eventImage"
              class="form-control"
              id="InputEventImage"
            />
          </div>
          <button
            onClick={this.createAnEvent}
            style={{ marginLeft: "25px" }}
            className="btn btn-warning"
          >
            Post
          </button>
        </form>
      </div>
    );
  }
}

export default CreateAnEvent;
