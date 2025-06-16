import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function HeroSection() {
  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.blob}></div>
      <div className={styles.blobBottomRight}></div>

      <div className={styles.imageWrapper}>
        <Image
          src="/profile.svg"
          alt="Leticia Profile"
          width={150}
          height={150}
          className={styles.image}
        />
      </div>

      <h1 className={styles.title}>Hello, I am Leticia</h1>

      <p className={styles.description}>
        A UI/UX Designer & Front-End Developer based in Indonesia. I love creating modern and meaningful web experiences.
      </p>

      <a href="/LeticiaCV.pdf" className={styles.download}>
        Download CV
      </a>
    </section>
  )
}