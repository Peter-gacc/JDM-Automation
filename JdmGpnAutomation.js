#! /usr/bin/env node
console.BufferHeight = 500;
//console.log("It is working!");
//import filesystem  from "fs";
const csv = require('csv');
const filesystem = require ('fs');

console.log("This Program Picks the Right GPN for Combination of MPNs");
console.log ("-------------------------------------------------------");

//pseduocode
// * Import data as CSV
// ** Prepare the data by constructing a mapping from MPNs/Mfrs to Lifecyle or Status
//** There are 3 Lifecycles: Active, Obsolete and NRND
// ** Ignoer Obsolete
// ** Bothe NRND and Active are good
// * Get input MPNs and Manufacturers
// * Compare Input MPNs vs Data MPNs, Compare Input Mfrs vs Data Mfr
// ** Order dosn't matter
// ** Handle various cases
// ** Return first matching value
//import filesystem  from "fs";
//import { parse } from "csv";

// * Import data as CSV
function importData() {
  console.log ("Import Data");
  //const imported = [];
  const parser = csv.parse({}, (error, data) => {

                                                         // DATA Manuplation
    //console.log (data);
  const imported = [...data];
    //console.log ("Data = ",imported);
    //console.log(data[1]);
    //console.log(data[1][0]);
                                                         // Converting the imported data from array into Object
  const testObj = Object.assign({}, imported);
  //console.log(testObj);
                                                        //Converting the nested array into nested Object
  for (let i=0; i<5; i++) {
    //let result = {};
    let [GPN,Description,Lifecycle,Rev,Compliance, Partype, MPN, Mfr,LifecyclePhase] = testObj[i];
    let sampleObj = {GPN,Description,Lifecycle,Rev,Compliance, Partype, MPN, Mfr,LifecyclePhase}
    //result = {...result,...sampleObj[i]};
    console.log(sampleObj);
  }

  // get the unique GPNs from the imported data
   let gpnData = [];
    for (let i=1; i < data.length; i++ ){
    gpnData.push(data[i][0]);
    }
    uniqGpn = [...new Set(gpnData)];
     //console.log(gpnData);
     //console.log("UniqGPNs = ",uniqGpn);
  //Arrange properties with the same GPN into one Array
   let arrangedData =[];
   for(let j=0; j<uniqGpn.length; j++){
      let newData = [];
      for (let i=0; i<imported.length; i++){
      if(imported[i][0]==="07114098")
      newData = [...newData,...data[i]];
      }
      //console.log("newData = ",newData);
     //console.log(removeDuplicates(newData));
     arrangedData = [...arrangedData,...newData];
     //console.log(arrangedData);
   }                                                  //END OF DATA MANUPLATION


  });

  filesystem.createReadStream (".\\Testexample.csv").pipe(parser);

}

// ** Prepare the data by constructing a mapping from MPNs/Mfrs to Lifecyle or Status
//** There are 3 Lifecycles: Active, Obsolete and NRND
// ** Ignoer Obsolete
// ** Bothe NRND and Active are good

function prepareData(data) {
  console.log ("Prepare Data");


}

// * Get input MPNs and Manufacturers
function getInputs() {
}

// * Compare Input MPNs vs Data MPNs, Compare Input Mfrs vs Data Mfr
// ** Order dosn't matter
// ** Handle various cases

function compareMPNs() {
  console.log ("Compare MPNs");
}

// ** Return first matching value
function main() {
  importData();
  prepareData();
  getInputs();
  return compareMPNs();
  //console.log(importData());
}

main();
