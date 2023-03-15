import Image from 'next/image';
import styles from '../styles/layout.module.css';
import image from '../public/image.jpg';
import Header from "./header"

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.bgImage} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
