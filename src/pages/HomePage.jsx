// import { HomeText } from "@/components/HomeText/HomeText";
// import { ExploreButton } from "@/components/ExploreButton/ExploreButton";
// import  NavBar from "@/components/NavBar/NavBar";

// import styles from "@/styles/HomePage.module.css";

// export function HomePage() {
//     return (
//         <main className={styles.HomePage}>
//             <NavBar/>
//             <HomeText />
//             <ExploreButton />
//         </main>
//     )
// }

// import React from "react";
import { DisplayButton } from "./DisplayButton";
import "./style.css";

export const MainContent = () => {
  return (
    <div className="main-content">
      <div className="hero">
        <div className="div">
          <div className="texts">
            <p className="SO-YOU-WANT-TO-TRAV">SO, YOU WANT TO TRAVEL TO</p>

            <div className="text-wrapper-2">SPACE</div>

            <p className="let-s-face-it-if-yo">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div className="button">
            <DisplayButton />
          </div>
        </div>
      </div>
    </div>
  );
};

