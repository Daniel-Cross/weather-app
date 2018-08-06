import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import WeatherIcon from 'react-icons-weather';
import '../styles/forecast-details.scss';

const ForecastDetails = props => (
  <div className="forecast-details">
    <div className="big-date">
      <span>
        {Moment(props.forecast.date).format('ddd Do MMM')}
      </span>
    </div>
    <br />
    <div className="big-icon">
      <span>
      {<WeatherIcon name="owm" iconId={props.forecast.icon} flip="horizontal" rotate="90" />}
      </span>
    </div>

    <div className="temp-max">
      <span>
        Max Temperature: {props.forecast.temperature.max}&deg;c
      </span>
    </div>
    <br />
    <div className="temp-min">
      <span>
      Min Temperature: {props.forecast.temperature.min}&deg;c
      </span>
    </div>
    <br />
    <div className="big-humidity">
      <span>
      Humidity: {props.forecast.humidity}%
      </span>
    </div>
    <br />
    <div className="wind-speed">
      <span>
        Wind: {props.forecast.wind.speed}mph {props.forecast.wind.direction}
      </span>
    </div>
  </div>
);


ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
