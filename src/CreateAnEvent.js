import React, { Component } from "react";
import "./App.css";
import fire from "./config/Fire";

class CreateAnEvent extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div>
        <h1>Create an Event</h1>
        <form>
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
            />
          </div>
          <button
            onClick={this.postEventSuggestion}
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
