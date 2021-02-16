import Papa from 'papaparse'
import { readFileSync, readdirSync } from 'fs'
import path from 'path'



class ParseService {
  public assetToParse: string[];
  public readData: string;
  //public parsedData: Papa.ParseResult<unknown>;
  constructor(assetPath: string) {
    this.assetToParse = readdirSync(assetPath)
    console.log(`assetToParse: ${JSON.stringify(this.assetToParse)}`)
    this.readData = '' //readFileSync(this.assetToParse, 'utf-8')
    //this.parsedData = Papa.parse(this.assetToParse, {
    //delimiter: ",",
    //complete: function (results) {
    //        return results
    //    }
    //})
  }
  public consolePrintAssetToParse(): void {
    return console.log(`Value for assetToParse: ${JSON.stringify(this.assetToParse)}`)
  }
  public consolePrintParsedData(): void {
    //    return console.log(`Value for parsedData: ${JSON.stringify(this.parsedData, null, 2)}`)
  }
}

export default ParseService