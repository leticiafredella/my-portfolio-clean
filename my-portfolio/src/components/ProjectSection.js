import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../styles/Home.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectSection() {
  const projects = [
    {
      title: 'MyMedic Health App',
      description: 'A health consultation and medicine ordering app prototype built with Figma.',
      image: '/project1.svg',
    },
    {
      title: 'Responsive Recipe Website',
      description: 'A website built with HTML, CSS, JS, and Bootstrap for showcasing recipes on all devices.',
      image: '/project2.svg',
    },
    {
      title: 'Event Organizer Website',
      description: 'A CRUD-based web project focusing on clean structure and navigation.',
      image: '/project3.svg',
    },
  ]

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
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <section id="projects" ref={sectionRef} className={styles.projects}>

      <h2 className={styles.sectionTitle}>My Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
