import { stack } from '../../../data/stack'

export default function StackGroup() {
  return (
    <div className="flex shrink-0 gap-12 pr-12">
      {stack.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center gap-2 shrink-0 text-[#94a3b8] hover:text-violet-400 transition-colors duration-300 cursor-default"
        >
          <tech.icon size={40} />
          <span className="text-xs font-medium">{tech.name}</span>
        </div>
      ))}
    </div>
  )
}
