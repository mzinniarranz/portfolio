import { motion } from 'framer-motion'

import { useTimelineItem } from './use-timeline-item'
import { cardVariants, nodeVariants, mobileVariants } from './config'
import Card from './card/Card'

export default function TimelineItem({ item, index, onSelect }) {
  const { isLeft } = useTimelineItem(index)

  return (
    <div
      className={`
        relative flex items-start gap-0 w-full mb-12
        ${isLeft ? 'flex-row' : 'flex-row-reverse'}
      `}
    >
      <motion.div
        className={`
          w-[calc(50%-2rem)] group
          ${isLeft ? 'mr-auto pr-8' : 'ml-auto pl-8'}
          hidden md:block
        `}
        custom={isLeft}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <Card item={item} onSelect={onSelect} />
      </motion.div>

      <motion.div
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10"
        variants={nodeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div
          className={`
            w-4 h-4 rounded-full border-2 transition-all duration-300
            ${
              item.current
                ? 'bg-violet-500 border-violet-400 shadow-[0_0_12px_rgba(124,58,237,0.8)]'
                : 'bg-[#1a1a2e] border-violet-600 group-hover:border-violet-400'
            }
          `}
        />
      </motion.div>

      <motion.div
        className="w-full md:hidden"
        variants={mobileVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center mt-1 shrink-0">
            <div
              className={`
                w-3 h-3 rounded-full border-2
                ${
                  item.current
                    ? 'bg-violet-500 border-violet-400 shadow-[0_0_10px_rgba(124,58,237,0.7)]'
                    : 'bg-[#1a1a2e] border-violet-600'
                }
              `}
            />
          </div>
          <Card item={item} onSelect={onSelect} />
        </div>
      </motion.div>
    </div>
  )
}
