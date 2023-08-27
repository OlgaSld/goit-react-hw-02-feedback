import { Component } from "react";
import { Feedback } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statictics/Statictics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { Layout } from "./Layout";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 })
    )};
  
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, sum) => total += sum)
}

  countPositiveFeedbackPercentage = (totalFeedback) => {
    const { good } = this.state;
    return Math.round((good / totalFeedback) * 100) || 0
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(totalFeedback);
    return (
      <Layout>
        <Section title="Please leave feedback">
          <Feedback options={options} onLeaveFeedback={this.leaveFeedback} />
        </Section>
        <Section title="Statictics">
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Layout>
    );
  }
};
