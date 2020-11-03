const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require('web3');
const str = require('./compile.js');
var res = str.split("!");

const provider = new HDWalletProvider(
    'tray rug remove odor surprise stock bamboo write open rigid involve learn',
    'https://rinkeby.infura.io/v3/ad2a2671a1ef42db8291091539098489'
);

const web3 = new Web3(provider);

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(res[1]))
        .deploy({data: res[0]})
        .send({from: accounts[0], gas: '1000000'});

    console.log(res[1]);
    console.log('Contract deployed to', result.options.address);
};
deploy();