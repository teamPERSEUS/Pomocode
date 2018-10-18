import React from 'react';
import axios from 'axios';
import IssueDescView from './IssueDescView';

const plannerURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:4000' : process.env.PLANNER_SERVICE;

class IssueDesc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: [],
      hours: [],
      date: [new Date(), new Date()],
    };
    this.setMinutes = this.setMinutes.bind(this);
    this.setHours = this.setHours.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onDateChange(date) {
    this.setState({
      date,
    });
  }

  setMinutes(event) {
    this.setState({
      minutes: event.target.value,
    });
  }

  setHours(event) {
    this.setState({
      hours: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { hours, minutes, date } = this.state;
    const { selectedIssue } = this.props;

    selectedIssue.estimate_start_date = date[0];
    selectedIssue.estimate_end_date = date[1];
    selectedIssue.estimate_time = (hours * 60 * 60) + (minutes * 60);
    selectedIssue.planned = true;

    axios.put(`${plannerURL}/addIssuePlan`, selectedIssue)
      .then(() => {
        this.props.getPlannedIssues();
        alert('Plan Uploaded!');
      });
  }

  render() {
    const { selectedIssue } = this.props;
    const { minutes, hours, date } = this.state;
    return (
      <IssueDescView
        selectedIssue={selectedIssue}
        setHours={this.setHours}
        setMinutes={this.setMinutes}
        onDateChange={this.onDateChange}
        handleSubmit={this.handleSubmit}
        minutes={minutes}
        hours={hours}
        date={date}
      />
    );
  }
}
export default IssueDesc;
