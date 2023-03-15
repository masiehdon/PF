import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css"

export default function Header() {
  const router = useRouter();
  return (
    <div className={styles.headerContainer} style={{ zIndex: 1 }}>
      <h2 className={styles.header}>Thats Me</h2>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
             <li>
            <Link
              className={`${styles.link} ${
                router.pathname == "/" ? styles.active : ""
              }`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${
                router.pathname == "./about" ? styles.active : ""
              }`}
              href="./about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link} ${
                router.pathname == "./projects" ? styles.active : ""
              }`}
              href="./projects"
            >
              Projects
            </Link>
            <Link className={`${styles.link} ${
                router.pathname == "./contact" ? styles.active : ""
              }`}
              href="./contact"
            >
                Contact
             </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
