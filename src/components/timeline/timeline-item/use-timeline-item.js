export function useTimelineItem(index) {
  const isLeft = index % 2 === 0

  return { isLeft }
}
