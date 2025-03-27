// import styles from "./HomeText.module.css";

// export function HomeText() {
//     return (
//         <div className={styles.HomeText}>
//             <span>So, you want to travel to</span>
//             <h1>Space</h1>
//             <p>
//                 Let’s face it; if you want to go to space, you might as well genuinely go to
//                 outer space and not hover kind of on the edge of it. Well sit back, and relax
//                 because we’ll give you a truly out of this world experience!
//             </p>
//         </div>
//     )
// }

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

                </div>
            </div>
        </div>
    );
};
