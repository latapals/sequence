sequence = {
  history: [],
  registry: new Set(),
  timeout: window.setTimeout(null)
}

class Sequence {
  constructor(keys, callback) {
    this.keys = keys
    this.callback = callback
    sequence.registry.add(this)
  }
  
  kill() { sequence.registry.delete(this) }
}

document.addEventListener("keydown", event => {
  clearTimeout(sequence.timeout)
  sequence.timeout = window.setTimeout(() => {
    sequence.history = []
  }, 1200)
  sequence.history.push(event.key.toLowerCase())
  
  if (event.altKey || event.controlKey || event.metaKey || event.shiftKey) return sequence.history = []
  
  sequence.registry.forEach(seq => {
    if (seq.keys.every(v => sequence.history.includes(v.toLowerCase()))) {
      seq.callback(event)
      clearTimeout(sequence.timeout)
      sequence.history = []
    }
  })
})
