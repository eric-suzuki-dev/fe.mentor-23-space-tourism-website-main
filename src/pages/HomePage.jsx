import { HomeText } from "@/components/HomeText/HomeText";
import { ExploreButton } from "@/components/ExploreButton/ExploreButton";
import { MobileNav } from "../components/Navbar/MobileNav";

import styles from "@/styles/HomePage.module.css";

export function HomePage() {
    return (
        <main className={styles.HomePage}>
            <MobileNav/>
            <HomeText />
            <ExploreButton />
        </main>
    )
}


