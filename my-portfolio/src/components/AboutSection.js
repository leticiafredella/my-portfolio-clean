import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../styles/Home.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

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
          start: 'top 90%', // Muncul lebih awal
        },
      }
    )
  }, [])

  return (
    <section id="about" ref={sectionRef} className={styles.about}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <p className={styles.aboutText}>
        Hi! I'm Leticia, a passionate tech student who loves building clean, simple, and meaningful digital experiences. I’ve worked on various web design and development projects during my studies — from responsive websites to UI/UX prototypes. I’m always curious, love learning, and enjoy working both independently and as part of a team.
      </p>
    </section>
  )
}