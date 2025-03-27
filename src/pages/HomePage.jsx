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
import { MainContent } from "../components/HomeText/HomeText";
import { DisplayButton } from "./DisplayButton";
import { Navigation } from "./DisplayButton";
// import { Logo } from "./Logo";
import "./style.css";

export const MobileHome = () => {
    return (
        <main className="mobile-home">
            <div className="navigation">
                <Navigation />
            </div>

            <div className="main-content">
                <MainContent />
            </div>

            <div className="button">
                <DisplayButton />
            </div>
        </main>
    );
};
