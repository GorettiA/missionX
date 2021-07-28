import React, { useState } from "react";
import { Link } from "react-router-dom";

import LearningObjectives from "../tpbPages/LearObjeTpb";
import Instructions from "../tpbPages/InstTpb";
import VideoTutorial from "../tpbPages/VideTuto";
import PreviewProject from "../tpbPages/PrevProj";
import CheckSubmissions from "../tpbPages/ChecSubm";
import "../tpbCSS/TPBTabs.css";

export default function TPBTabs() {
  const [showAll, showIcons] = useState(false);

  // chevron mechanism
  const tabControl = () => {
    if (showAll === true) {
      showIcons(false);
    } else {
      showIcons(true);
    }
  };

  const [activeButton, setActiveButton] = useState("t1");

  const handleClick = (e) => {
    setActiveButton(e.target.value);
    console.log(activeButton);
  };

  //to display the pages to the right
  var loadDisplay;

  if (activeButton === "t1") {
    loadDisplay = <LearningObjectives />;
  } else if (activeButton === "t2") {
    loadDisplay = <Instructions />;
  } else if (activeButton === "t3") {
    loadDisplay = <VideoTutorial />;
  } else if (activeButton === "t4") {
    loadDisplay = <PreviewProject />;
  } else if (activeButton === "t5") {
    loadDisplay = <CheckSubmissions />;
  }

  return (
    <div className="tpb-tabs-area">
      <div className="tpb-display-area">
        <div className={showAll === false ? "tabs-showAll" : "active-reveal"}>
          <div className={showAll === true ? "tabs-showIcons" : "hide-reveal"}>


            {/* collapsed tabs */}
            <div className="collapsedTabsFull">
              <div className="collapsedTabs">
                
                <div className="avatar-onTabs">
                  <img src="./Mission X Images/Project Builder/Ellipse 39@2x.png" alt="avatar"/>
                </div>
                 

              
                  <button
                    value="t1" onClick={handleClick}
                    className={activeButton === "t1" ? "active" : ""}>
                    <img id="collapsedButtonImg" src= {activeButton === "t1"
                          ?"./Mission X Images/Project Builder/objectives dark@2x.png" 
                          : "./Mission X Images/Project Builder/objectives@2x.png" } alt="target"/>
                  </button>

                  <button
                    value="t2"
                    onClick={handleClick}
                    className={activeButton === "t2" ? "active" : ""}>
                    <img id="collapsedButtonImg" src={
                        activeButton === "t2"
                          ? "./Mission X Images/Project Builder/steps dark@2x.png"
                          : "./Mission X Images/Project Builder/steps@2x.png"} alt="instructions" />
                  </button>

                  <button
                    value="t3"
                    onClick={handleClick}
                    className={
                      activeButton === "t3" ? "active" : "" }>                    
                    <img id="collapsedButtonImg" src={
                        activeButton === "t3"
                          ? "./Mission X Images/Project Builder/video dark@2x.png"
                          : "./Mission X Images/Project Builder/video@2x.png" } alt="video" />
                  </button>

                  <button
                    value="t4"
                    onClick={handleClick}
                    className={
                      activeButton === "t4" ? "active" : ""}>
                    <img id="collapsedButtonImg" src={
                        activeButton === "t4"
                          ? "./Mission X Images/Project Builder/new proj dark@2x.png"
                          : "./Mission X Images/Project Builder/new proj@2x.png"} alt="new project" />
                  </button>

                  <button
                    value="t5"
                    onClick={handleClick}
                    className={
                      activeButton === "t5" ? "active" : ""}>
                    <img id="collapsedButtonImg" src={
                        activeButton === "t5"
                          ? "./Mission X Images/Project Builder/submit proj dark@2x.png"
                          : "./Mission X Images/Project Builder/submit proj@2x.png"} alt="submit proj" />
                  </button>

                  <button disabled value="t6" onClick={handleClick}
                    className={activeButton === "t6" ? "active" : ""}>
                    <img id="collapsedButtonImg" src={
                        activeButton === "t6"
                          ? "./Mission X Images/Project Builder/prize copy@2x.png"
                          : "./Mission X Images/Project Builder/prize copy@2x.png"} alt="badges" />
                  </button>

                  <button disabled value="t7" onClick={handleClick}
                    className={ activeButton === "t7" ? "active" : ""}>
                    <img id="collapsedButtonImg" src={
                        activeButton === "t7"
                          ? "./Mission X Images/Project Builder/list copy@2x.png"
                          : "./Mission X Images/Project Builder/list copy@2x.png"} alt="list" />
                  </button>

                
              </div>

              {/* arrow to expand tabs */}
              <div
                className={showAll === true ? "switch-chevronR" : "move-arrow"}
                onClick={tabControl}
              >
                <img
                  alt="right arrow"
                  src="./Mission X Images/Project Builder/Icon open-caret-right.png"
                />
              </div>

              {/* for the little thingys at the bottom left */}
              <div className="tpb-tabs-tiny-links">
                <Link className="link" to="/profilePage">
                  <img
                    src="./Mission X Images/Project Builder/Icon awesome-user-circle@2x.png"
                    alt="profile"
                  />
                </Link>

                <img
                  src="./Mission X Images/Project Builder/Icon material-settings@2x.png"
                  alt="settings"
                />

                <Link className="link" to="/">
                  <img
                    src="./Mission X Images/Project Builder/Icon awesome-sign-out-alt@2x.png"
                    alt="logout"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* valid */}



{/* TABS EXPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDED */}
          <div className="tabsExpanded">
           
            <div className="avatar-area-expanded">
              <img
                src="./Mission X Images/Project Builder/Ellipse 39@2x.png"
                alt="avatar"/>
            </div>

            <button
              value="t1"
              onClick={handleClick}
              className={activeButton === "t1" ? "active" : ""}
            >
              <img id="expandedButtonImg"
                src={
                  activeButton === "t1"
                    ? "./Mission X Images/Project Builder/objectives dark@2x.png"
                    : "./Mission X Images/Project Builder/objectives@2x.png"
                }
                alt="target"
              />
              LEARNING OBJECTIVES
            </button>

            <button 
              value="t2"
              onClick={handleClick}
              className={activeButton === "t2" ? "active" : ""}
            >
              <img id="expandedButtonImg"
                src={
                  activeButton === "t2"
                    ? "./Mission X Images/Project Builder/steps dark@2x.png"
                    : "./Mission X Images/Project Builder/steps@2x.png"
                }
                alt="process"
              />
              INSTRUCTIONS
            </button>

            <button 
              value="t3"
              onClick={handleClick}
              className={activeButton === "t3" ? "active" : ""}
            >
              <img id="expandedButtonImg"
                src={
                  activeButton === "t3"
                    ? "./Mission X Images/Project Builder/video dark@2x.png"
                    : "./Mission X Images/Project Builder/video@2x.png"
                }
                alt="video play"
              />
              VIDEO TUTORIAL
            </button>

            <button
              value="t4"
              onClick={handleClick}
              className={activeButton === "t4" ? "active" : ""}
            >
              <img id="expandedButtonImg"
                src={
                  activeButton === "t4"
                    ? "./Mission X Images/Project Builder/new proj dark@2x.png"
                    : "./Mission X Images/Project Builder/new proj@2x.png"
                }
                alt="screen new file "
              />
              PREVIEW PROJECT
            </button>

            <button 
              value="t5"
              onClick={handleClick}
              className={activeButton === "t5" ? "active" : ""}
            >
              <img id="expandedButtonImg"
                src={
                  activeButton === "t5"
                    ? "./Mission X Images/Project Builder/submit proj dark@2x.png"
                    : "./Mission X Images/Project Builder/submit proj@2x.png"
                }
                alt="submit"
              />
              CHECK SUBMISSIONS
            </button>

            {/* DISABLED BUTTONS */}
            <button
              disabled
              value="t6"
              onClick={handleClick}
              className={activeButton === "t6" ? "active" : ""}
            >
              <img id="expandedButtonImg"
                src={
                  activeButton === "t6"
                    ? "./Mission X Images/Project Builder/prize copy@2x.png"
                    : "./Mission X Images/Project Builder/prize copy@2x.png"
                }
                alt="badge"
              />
              OFFLINE ACTIVITIES
            </button>

            <button
              disabled
              value="t7"
              onClick={handleClick}
              className={activeButton === "t7" ? "active" : ""}
            >
              <img id="expandedButtonImg"
                src={
                  activeButton === "t7"
                    ? "./Mission X Images/Project Builder/list copy@2x.png"
                    : "./Mission X Images/Project Builder/list copy@2x.png"
                }
                alt="list quiz "
              />
              VIEW QUIZ RESULTS
            </button>
          </div>

          {/* little buttons at the bottom of the tabs */}
          <div className="tpb-tiny-links">
            <Link className="link" to="/profilePage">
              <div className="bottom-left">
                <img
                  src="./Mission X Images/Project Builder/Icon awesome-user-circle@2x.png"
                  alt="user"
                />
                Profile
              </div>
            </Link>

            <div className="bottom-left">
              <div className="bottom-left">
                <img
                  src="./Mission X Images/Project Builder/Icon material-settings@2x.png"
                  alt="settings"
                />
                Settings
              </div>
            </div>

            <Link className="link" to="/">
              <div className="bottom-left">
                <img
                  src="./Mission X Images/Project Builder/Icon awesome-sign-out-alt@2x.png"
                  alt="sign out"
                />
                Logout
              </div>
            </Link>
          </div>
        </div>

        {/* arrow pointing left to collapse the tabs */}
        <div
          className={showAll === true ? "move-arrow" : "switch-chevronL"}
          onClick={tabControl}
        >
          <img
            src="./Mission X Images/Project Builder/Icon open-caret-left.png"
            alt="left arrow"
          />
        </div>

        <div className="tpb-display">
          <div className="butt-display-area">
            <button className="takeButt">Take Screenshot</button>
            <button className="helpButt">Help Centre</button>
            <button className="moreButt">More Projects</button>
          </div>
          {loadDisplay}
        </div>
      </div>
    </div>
  );
}
