require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad imitate private flush thank'; 
let testAccounts = [
"0x8875dc9471879bbb1d222d967aad9aa0716c58df28f5caf417d1835807ccacb6",
"0xd5d5c5e8d8b6f07c81b9c6a76e43aca8a2d9c2c5a0034e7055cc4700967108f8",
"0xaf2755574122ee311531f99056842bceaaa74405faf0deccabaf156fa2bb1dcd",
"0x4cd04c20950ca12f56fee204a4fbaff30f52deb275fbc2c0c5366f6385bb275f",
"0xccf85b6da6d86a7d698d4fc004970b40681cd3d98dc3705d8545e58cb69eab32",
"0x98fec1fdf2c4c1a1e931e6462c8a79c7abc573c45aca5546da86acdf772aa122",
"0x4ed9516c2374f489848b27d99070de911463ece2e58252c03bdd5f81d9149c7c",
"0xd2812df07d3c83fcfb2ad6f91611d1299fd474fc1452966e4d0a876830c4e890",
"0x535b04ef3603b7c428ddc421015e5e96ce96289f83ffcaaaa01e9426c04edb3c",
"0xd616e8304d68e9ded9f88052e34d6cd1dfd08e81d105b4074d4affe5da683d55"
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
            version: '^0.5.11'
        }
    }
};
