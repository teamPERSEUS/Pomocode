import React from 'react';
import axios from 'axios';
import IssueDescView from './IssueDescView';

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
    }, () => { console.log(this.state.date); });
  }

  setMinutes(event) {
    this.setState({
      minutes: event.target.value,
    });
    // console.log(minutes)
  }

  setHours(event) {
    this.setState({
      hours: event.target.value,
    });
    // console.log(hours)
  }

  handleSubmit(event) {
    event.preventDefault();
    const planInfo = {};
    planInfo.minutes = this.state.minutes;
    planInfo.hours = this.state.hours;
    planInfo.startdate = this.state.date[0];
    planInfo.enddate = this.state.date[1];
    planInfo.git_id = this.props.selectedIssue.git_id;
    planInfo.username = this.props.selectedIssue.username;

    console.log(planInfo);

    axios.put('http://localhost:4000/addIssuePlan', planInfo)
      .then(() => {
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
