const { expect, use } = require('chai');
const hre = require('hardhat');
const { solidity } = hre.waffle;

use(solidity);

describe('NyNFT', () => {
    let NFT;
    let signer;

    before(async () => {
        NFT = await (await hre.ethers.getContractFactory('MyNFT'))
            .deploy('NFT', 'N');
        await NFT.deployed();
        [signer] = await hre.ethers.getSigners();
    });

    it('init', async () => {
        expect(hre.ethers.utils.isAddress(NFT.address)).to.true;
        console.log(`contract: ${NFT.address}`);
    });

    it('mint', async () => {
        await NFT.connect(signer).mint(5487);
        expect(await NFT.ownerOf(5487)).to.eq(signer.address);
    });
});

