import Link from "next/link";
import styles from "./menu.module.css";
import Imagem from "next/image";

export default function Menu() {
  return (
    <header className={styles.cabecalho}>
      <Imagem width={100}
      height={100}
      src={"https://www.ifms.edu.br/marcaifms.png"}/>
      
      <nav>
        <ul>
          <Link href="/">
            <li className={styles.link}>Home</li>
          </Link>
          <Link href="/registro">
            <li className={styles.link}>Registrar</li>
          </Link>
          <Link href="/localizacao" >
           <li className={styles.link}>Localização</li>
          </Link>
          
        </ul>
      </nav>
    </header>
  );
}
