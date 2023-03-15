import styles from "../styles/contact.module.css"

export default function Contact() {
    return (
<section className={styles.contact}>
            <h2 className={styles.h2}>Contact Me</h2>

        
            <form className={styles.form} action="/contact" method="POST">
              <label className={styles.label} for="name">Name:</label><br />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"/><br />
              <label className={styles.label} for="email">Email:</label><br />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"/><br />
              <label className={styles.label} for="message">Message:</label><br />
              <textarea className={styles.textarea}
                name="message"
                placeholder="Enter your message"></textarea><br />
              <input className={styles.button} type="submit" value="Submit" />
            </form>
          </section>
    )
}