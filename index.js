import { gotScraping } from 'got-scraping';
import { FpBuilder } from './utils/fp_builder.js';
import { encrypt } from './utils/encryption.js';

let response = await gotScraping.get('https://eb6a7d55b667d9b6e52e2ebe363274d7b395eb78.seondnsresolve.com/', {
  headers: {
    'Origin': 'https://app.koyeb.com',
    'Referer': 'https://app.koyeb.com/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
  }
});

const fp_builder = new FpBuilder(response.body.replace(/"/g, ""))

let fp = fp_builder.fpInit()
const ssid = JSON.parse(fp).session_id
let body = encrypt(ssid, fp)

response = await gotScraping.post(`https://${ssid}.seondnsresolve.com/`, {
  headers: {
    'Origin': 'https://app.koyeb.com',
    'Referer': 'https://app.koyeb.com/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
  },
  json: body
});

let dynamic = JSON.parse(response.body).data

fp = fp_builder.finalFp(dynamic, '0.0.0.0') // part of ur ip in 2rd param
const seon_fp = encrypt(ssid, fp)
console.log(seon_fp)