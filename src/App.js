import React from "react";
import styles from "./App.module.scss";
import { Footer } from "./containers/Footer/Footer";
import { Main } from "./containers/Main/Main";
import { Nav } from "./containers/Nav/Nav";
import * as Scroll from "react-scroll";

export default function App() {
    return (
        <div className={styles.App}>
            <div className={styles.background}>
                <div className={styles.twinkling}>
                    <div className={styles.clouds}>
                        <Nav />
                        <Main />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}
