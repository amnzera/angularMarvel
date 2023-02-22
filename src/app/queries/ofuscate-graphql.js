import fs from 'fs';
import CryptoJS from 'crypto-js';
import {GET_PRODUCTS} from "./get-products.query.mjs";
import {GET_PRODUCTS2} from "./get-products.query.mjs";

const filePath = new URL(import.meta.url).pathname.substring(1).replace('ofuscate-graphql.js','get-products.query.mjs');

let arrayConstName = []
const array = [GET_PRODUCTS,GET_PRODUCTS2]
let constList = '';
function encryptQuery() {

  const contentFile = fs.readFileSync(filePath, 'utf8');
  const constName = contentFile.match(/\bconst\s+(\w+)/g);
  arrayConstName.push(constName)

  array.forEach((teste,index) => {
    const encryptedQuery = CryptoJS.AES.encrypt(teste.loc?.source.body || '', 'secretKey').toString();
    constList = constList + `export ${arrayConstName[0][index]} = \`${encryptedQuery}\`` + '\n';
  })

  fs.writeFileSync(filePath, constList);

}

encryptQuery();
