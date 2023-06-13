import React, { useState } from "react";
import "../App.css";
import Countdown from "react-countdown";
import { HamburgerMenu } from "../components/HamburgerMenu";
import "../styling/livestream.css";
import { Link } from "react-router-dom";
import Instagram from "../images/instagram.svg";
import Tiktok from "../images/icons8-tiktok.svg";
import { Video } from "../components/Video";
export const Livestream = () => {
  const [stream, setStream] = useState(false);
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <div className="timer">
        <div className="day">
          <h1 className="glitch_title glitch layers" data-text={`${days}Days`}>
            {days} <span className="span">Days</span>
          </h1>
        </div>
        <div className="hour">
          <h1
            className="glitch_title glitch layers"
            data-text={`${hours}Hours`}
          >
            {hours} <span className="span">Hours</span>{" "}
          </h1>
        </div>
        <div className="min">
          <h1
            className="glitch_title glitch layers"
            data-text={`${minutes}Minutes`}
          >
            {minutes} <span className="span">Minutes</span>{" "}
          </h1>
        </div>
        <div className="sec">
          <h1
            className="glitch_title glitch layers"
            data-text={`${seconds}Seconds`}
          >
            {seconds} <span className="span">Seconds</span>
          </h1>
        </div>
      </div>
    );
  };
  return (
    <div className="outerwrapper">
      <HamburgerMenu className={"headerLive"} />

      {stream ? (
        <Video />
      ) : (
        <div className="wrapper">
          <div className="container">
            <h1>The show begins in...</h1>
            <Countdown
              renderer={renderer}
              date={new Date("2023-06-23T19:00:00").getTime()}
              onComplete={() => setStream(true)}
            />
          </div>
          <div className="media">
            <p>Be ready on Friday June 23th.</p>
            <div className="media_buttons">
              <Link
                to={
                  "https://www.eventbrite.com/e/tickets-final-show-2023-648852223467"
                }
                target="_blank"
              >
                {" "}
                <button className="button-tickets">Get your tickets</button>
              </Link>
              <div className="instagram">
                <p>Follow us on </p>
                <div className="instagram_container">
                  <Link
                    to={"https://www.instagram.com/multimedia.ehb/"}
                    target="_blank"
                  >
                    <img className="instagram_styling" src={Instagram} />
                  </Link>

                  <Link
                    to={"https://www.tiktok.com/@multimedia.ehb"}
                    target="_blank"
                  >
                    <img className="instagram_styling" src={Tiktok} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
