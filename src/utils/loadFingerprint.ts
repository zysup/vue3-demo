import { loadScript } from './index'

loadScript('/fingerprint2.min.1.5.1.js', 5000, () => {
  const fp = new Fingerprint2()
  fp.get(function (result: string) {
    console.log(result)
  })
})
