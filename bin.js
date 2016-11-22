#!/usr/bin/env node

const path = require('path')

const imageName = process.argv[2].trim()

const fullPath = imageName[0] === '/'
  ? imageName
  : path.resolve(process.cwd(), imageName)

console.log(`IMGCAT ${fullPath}`)
