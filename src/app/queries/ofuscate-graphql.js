import fs from 'fs';
"use strict";
import * as acorn from 'acorn'
import CryptoJS from 'crypto-js';
import {GET_PRODUCTS} from "./get-products.query.mjs";
import {GET_PRODUCTS2} from "./get-products.query.mjs";

const filePath = new URL(import.meta.url).pathname.substring(1).replace('ofuscate-graphql.js','get-products.query.mjs');

let arrayConstName = []
const array = [GET_PRODUCTS,GET_PRODUCTS2]
let constantes = '';
function encryptQuery() {

  const conteudo = fs.readFileSync(filePath, 'utf8');
  const constantesName = conteudo.match(/\bconst\s+(\w+)/g);
  arrayConstName.push(constantesName)

  // console.log(GET_PRODUCTS)
  array.forEach((teste,index) => {
    console.log(index)
    console.log(arrayConstName[0][index])
    const encryptedQuery = CryptoJS.AES.encrypt(teste.loc?.source.body || '', 'secretKey').toString();
    constantes = constantes + `export ${arrayConstName[0][index]} = \`${encryptedQuery}\`` + '\n';
  })


  fs.writeFileSync(filePath, constantes);


  // const encryptedQuery = CryptoJS.AES.encrypt(GET_PRODUCTS.loc?.source.body || '', 'secretKey').toString();
  // const fileContent = `export const GET_PRODUCTS = \`${encryptedQuery}\``;
  // fs.writeFileSync(filePath, fileContent);

  // ----------------------------------------------------------------
  // const decrypted = CryptoJS.AES.decrypt(encryptedQuery, 'secretKey');
  // const originalQuery = decrypted.toString(CryptoJS.enc.Utf8);
  // const testex = gql(originalQuery)
  // console.log(testex)
  // ----------------------------------------------------------------

  // console.log(filePath)

  // //
  // let concatQuerys = '';
  // arrayConst.forEach((constData) => {
  //   const encryptedQuery = CryptoJS.AES.encrypt(constData.loc?.source.body || '', 'secretKey').toString();
  //   console.log(encryptedQuery)
  //   concatQuerys = concatQuerys + '\n' + `export const ${constData} = \`${encryptedQuery}\``;
  // })
  // console.log(concatQuerys)
    // fs.writeFileSync(filePath, fileContent);

  // let acorn = require("acorn");
  // const codigoFonte = fs.readFileSync(filePath, 'utf-8');
  // console.log(codigoFonte)
  // const arvoreSintatica = acorn.parse(codigoFonte, { ecmaVersion: 2020 });

  // const consts = [];
  //
  // arvoreSintatica.body.forEach((node) => {
  //   if (node.type === 'VariableDeclaration' && node.kind === 'const') {
  //     node.declarations.forEach((declaracao) => {
  //       consts.push(declaracao.id.name);
  //     });
  //   }
  // });

  // console.log(consts);

}

encryptQuery();
