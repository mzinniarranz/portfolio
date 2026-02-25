import { SiLinkedin } from 'react-icons/si'

export default function Linkedin() {
  return (
    <a
      href="https://www.linkedin.com/in/marczinni/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="
        inline-flex items-center justify-center
        w-12 h-12 rounded-xl
        border border-muted/15 hover:border-violet-500/50
        text-muted hover:text-text
        transition-all duration-300 hover:-translate-y-0.5
        hover:bg-muted/5
      "
    >
      <SiLinkedin size={20} />
    </a>
  )
}
