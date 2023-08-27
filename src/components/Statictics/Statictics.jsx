import { StaticticsContainer, StatisticsList, StatItem } from "./Statictics_styled";
import PropTypes from 'prop-types';


export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return (
        <StaticticsContainer>
            <StatisticsList>
                <StatItem>Good: {good}</StatItem>
                <StatItem>Neutral: {neutral}</StatItem>
                <StatItem>Bad: {bad}</StatItem>
                <StatItem>Total: {total}</StatItem>
                <StatItem>Positive Feedback: {positiveFeedback}%</StatItem>
            </StatisticsList>
        </StaticticsContainer>
    )
} 

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};