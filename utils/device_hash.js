import { canvas_hash } from "./canvas_hash.js"
import { MurmurHash } from "./murmurhash.js"

let data = [
  "Windows",
  "desktop",
  24,
  8,
  1,
  16,
  "Win32",
  canvas_hash,
  false
]

const murmurhash = new MurmurHash()
const device_hash = murmurhash.x64hash128(data.join(""), 31)

export {
  device_hash
}