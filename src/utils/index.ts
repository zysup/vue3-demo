/**
 * Dynamically loads an external JavaScript file by creating a script element and appending it to the document head.
 *
 * @param url - The URL of the script to load.
 * @param time - Optional delay in milliseconds before loading the script. Defaults to 0.
 * @param callback -Optional callback function to be executed once the script has loaded.
 */
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
