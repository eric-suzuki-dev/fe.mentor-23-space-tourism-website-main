import React from "react";
import { DisplayButton } from "./DisplayButton";
import { Logo } from "./Logo";
import "./style.css";

export const MobileHome = () => {
  return (
    <div className="mobile-home">
      <div className="navigation">
        <div className="logo-wrapper">
          <Logo className="logo-instance" />
        </div>

        <div className="menu">
          <div className="div">
            <div className="shape" />

            <div className="shape-2" />

            <div className="shape-3" />
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="hero">
          <div className="hero-2">
            <div className="texts">
              <p className="SO-YOU-WANT-TO-TRAV">SO, YOU WANT TO TRAVEL TO</p>

              <div className="text-wrapper-2">SPACE</div>

              <p className="let-s-face-it-if-yo">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>

            <div className="button">
              <DisplayButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};