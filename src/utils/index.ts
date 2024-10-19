export function loadScript(url: string, time = 0, callback?: () => void) {
  setTimeout(() => {
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = function () {
      callback?.()
    }
    script.src = url
    document.head.appendChild(script)
  }, time)
}
