require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture struggle decrease pitch soft install merry flock genuine'; 
let testAccounts = [
"0x9c68acb878338a49b4b6322461796f7b2442d53a16624d3e70fcf3b5c6e32b62",
"0xa6061c80482d61a781575029022441f34397cdf4230641dba41245d7cf51ae61",
"0x8a871bab3b5013f3340717af4a72676e5f9f6eb8836035c6560e27dc7d3b8cbc",
"0x389bf9896d6808521c6c7d02314df6e017facd5633f040a5a22b48260d710042",
"0xe58ac66ccf402305c8c943e3515b0bd9f153497ae2ad2e26f20d54c5647eaf72",
"0x035068a49d095cb2b23175830c35b7e844b5b368929c3273f4c2cef31b4dc87f",
"0x35c590201995b55b575fe4dc9e180ea88c0b09331732fe10c45b106374f55b6b",
"0x0c79105ba3331507fc5fe8d333d795dc61a6f8d0453ee0c8c650ebd79fc0da45",
"0xdc1f7e4693ab03a75c6e9bc1a8db016f883b52fca7b3ad1ace0bb666b8bc43f3",
"0x0885294d17fd19c8c8bd5d299e691227cee6169da523a4a9f0d41f7c780aa833"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

