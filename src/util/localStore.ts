export function set(name: string, target: any) {
  localStorage.setItem(name, JSON.stringify(target))
}

export function get(name: string) {
  return JSON.parse(localStorage.getItem(name) as string)
}

export function remove(name: string) {
  localStorage.removeItem(name)
}
