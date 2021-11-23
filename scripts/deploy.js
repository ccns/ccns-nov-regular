const hre = require("hardhat");

(async () => {
    const factory = await hre.ethers.getContractFactory('MyNFT');
    const NFT = await factory.deploy('MyNFT', 'N');
    console.log(await NFT.deployed());
})();
