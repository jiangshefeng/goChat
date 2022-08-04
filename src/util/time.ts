function formatDate(date: number): string {
  const time = new Date(date)
  return time.getHours() + ':' + (time.getMinutes() + '').padStart(2, '0')
}

export { formatDate }
