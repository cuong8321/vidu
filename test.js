'use strict'
const pug = require('pug')
const fs = require('fs')
const out = pug.renderFile('index.pug', {pretty: true, taomang})
fs.writeFileSync('index.html', out)

function taomang (batdau, ketthuc) {
  const mang = []
  for (let i = batdau; i <= ketthuc; ++i) {
    mang.push(i)
  }
  return mang
}
