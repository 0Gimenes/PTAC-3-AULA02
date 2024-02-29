import styles from "./footer.module.css";
import Imagem from "next/image";
export default function Footer(){
    return(
        <footer className={styles.rodape}>
            <a href="https://ead.ifms.edu.br/">
            <Imagem width={100}
            height={100}
            src={"https://www.logo.wine/a/logo/Moodle/Moodle-Logo.wine.svg"}/>
            </a>
        <h1>Footer legal</h1>
        </footer>
    );
    }