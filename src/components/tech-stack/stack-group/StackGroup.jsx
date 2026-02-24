import { stack } from '../../../data/stack'

export default function StackGroup() {
  return (
    <div className="flex shrink-0 gap-12 pr-12">
      {stack.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center gap-2 shrink-0 text-muted hover:text-accent-text transition-colors duration-300 cursor-default"
        >
          <tech.icon size={40} />
          <span className="text-xs font-medium">{tech.name}</span>
        </div>
      ))}
    </div>
  )
}
