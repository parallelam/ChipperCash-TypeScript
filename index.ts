import { readdirSync, readFileSync } from 'fs';
import { ParseService } from './services'
import path from 'path'
//import * as csv from './assets'



export * from './services'

const app = () => {
  const bins = require('./assets/bins.csv')
  return new ParseService(bins).consolePrintAssetToParse()
}


const base = path.dirname(module.filename)

console.log(`Base: ${JSON.stringify(base)}`)
const directory = readdirSync(base)
console.log(`Directory: ${JSON.stringify(directory)}`)
const fileread = csv.default
//console.log(`File: ${JSON.stringify(fileread)}`)

//app()
//ParseService.consolePrintParsedData()