import "../CSS/banner.css";
import { Route, withRouter, Link, Redirect } from "react-router-dom";
import MoreInformationPage from "./MoreInformationPage";

function Banner() {
  return (
    <div className="bannerDiv">
      <div className="spanDiv">
        <span className="TitleText">Namaste XC</span>
        <br />
        <span className="SubTitleText">STAY TUNED!</span>
      </div>
      <div className="moreInformationButtonDiv">
        <button
          className="moreInformationButton"
          onClick={() => <MoreInformationPage />}
        >
          Click Here To Know More About Us!
        </button>
      </div>
    </div>
  );
}

export default Banner;
