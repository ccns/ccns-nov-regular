const hre = require("hardhat");

(async () => {
    const NFT = await hre.ethers.getContractAt('MyNFT', 'Put your address');
    const mintTX = await NFT.mint(5487);
    console.log(await mintTX.wait());
})();
