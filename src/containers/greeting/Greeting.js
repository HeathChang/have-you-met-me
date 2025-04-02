import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={ isDark ? "dark-mode greeting-text-h1" : "greeting-text" }
              >
                { " " }
                { greeting.title }{ " " }
                <span className="wave-emoji">{ emoji("👋") }</span>
              </h1>

              <p
                style={ {whiteSpace: "pre-line"} }
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                { greeting.subTitle }
              </p>
              <h1
                className={ isDark ? "dark-mode greeting-text-h1" : "greeting-text" }
              >
                { " " }{ greeting.usernameKorean }{ " " }
              </h1>

                <div id="resume" className="empty-div"></div>
                <SocialMedia />
                <div className="button-greeting-div">
                  <Button text="연락처 확인" href="#contact" />
                  { greeting.resumeLink && (
                    <a
                      href={ "https://midnight-braid-2a6.notion.site/1a1cbd8e9cb18006a235d0894ff61692" }
                      download="Resume.pdf"
                      target="_blank"
                      className="download-link-button"
                    >
                      <Button text="이력서 보러가기" />
                    </a>
                  ) }
                </div>
            </div>
          </div>
          <div className="greeting-image-div">
            { illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
