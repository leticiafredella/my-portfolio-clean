import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../styles/Home.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        },
      }
    )
  }, [])

  return (
    <section id="contact" ref={sectionRef} className={styles.contact}>
      <h2 className={styles.sectionTitle}>Contact Me</h2>
      <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Your Name"
          className={styles.inputField}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className={styles.inputField}
          required
        />
        <textarea
          placeholder="Your Message"
          className={styles.textArea}
          rows="5"
          required
        />
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </section>
  )
}