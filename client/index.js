const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? ✅
  const name = 'Chris Windler';

  const tree = new MerkleTree(niceList);
  const idx = niceList.indexOf(name);
  const proof  = tree.getProof(idx);
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    leaf: name,
    proof: proof
    // TODO: add request body parameters here! ✅
  });

  console.log({ gift });
}

main();