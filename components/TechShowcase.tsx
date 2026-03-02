import { projects } from '@/lib/projects'
import ProjectCard from './ProjectCard'

export default function TechShowcase() {
  return (
    <section id="work">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </section>
  )
}
