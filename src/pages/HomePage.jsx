import { HomeText } from "@/components/HomeText/HomeText";
import { ExploreButton } from "@/components/ExploreButton/ExploreButton";
import  NavBar from "@/components/NavBar/NavBar";
// import { MobileNav } from "@/components/Navbar/MobileNav";

import styles from "@/styles/HomePage.module.css";

export function HomePage() {
    return (
        <main className={styles.HomePage}>
            <NavBar/>
            <HomeText />
            <ExploreButton />
        </main>
    )
}


