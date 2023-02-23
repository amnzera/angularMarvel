import fs from 'fs';
import CryptoJS from 'crypto-js';


const filePath = new URL(import.meta.url).pathname.substring(1).replace('ofuscate-graphql.js','get-products.query.ts');
let constList = '';
function encryptQuery() {

  let fileContent  = fs.readFileSync(filePath, 'utf8');
  fileContent = fileContent.replace(/import {gql} from "graphql-tag";\n/, '');

  const constants = [];

  const regex = /export const (\w+)\s*=\s*([^;]+);/g;

  let match;
  while (match = regex.exec(fileContent)) {
    const constantName = match[1];
    const constantValue = match[2].replace('gql', '').replace('`', '').replace('`', '');
    constants.push({
      nameConst: constantName,
      valueConst: constantValue,
    });
  }

  constants.forEach((data) => {
    const encryptedQuery = CryptoJS.AES.encrypt(data.valueConst, 'secretKey').toString();
    constList = constList + `export const ${data.nameConst} = \`${encryptedQuery}\`` + '\n';
  })
  fs.writeFileSync(filePath, constList);
  console.log(constList);

}

encryptQuery();
