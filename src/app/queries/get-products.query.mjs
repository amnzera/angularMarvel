import gql from 'graphql-tag';
import fs from 'fs';
import CryptoJS from 'crypto-js';



const filePath = new URL(import.meta.url).pathname.substring(1);


export const GET_PRODUCTS = gql`
  query getProductsTeste {
    getProducts {
      cdProduct
    }
  }
`;


function encryptQuery() {
  // @ts-ignore
  console.log(filePath)
  // const encryptedQuery = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.stringify(GET_PRODUCTS), 'secretKey').toString();
  const encryptedQuery = CryptoJS.AES.encrypt(GET_PRODUCTS.loc?.source.body || '', 'secretKey').toString();
  const fileContent = `export const GET_PRODUCTS = \`${encryptedQuery}\``;
  fs.writeFileSync(filePath, fileContent);
}

encryptQuery();
