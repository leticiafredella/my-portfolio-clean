import styles from '../styles/Home.module.css'

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <p>© {new Date().getFullYear()} Leticia Fredella. All rights reserved.</p>
      <div className={styles.socialLinks}>
        <a href="https://github.com/leticiafredella" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/leticia-fredella-a23140286/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:leticiafredella123@gmail.com">Email</a>
      </div>
    </footer>
  )
}