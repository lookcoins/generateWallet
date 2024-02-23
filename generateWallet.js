const { ethers } = require('ethers');

function generateWallet() {
    // 创建一个随机钱包
    const wallet = ethers.Wallet.createRandom();

    // 打印钱包信息
    console.log("钱包地址:", wallet.address);
    console.log("助记词:", wallet.mnemonic.phrase);
    console.log("私钥:", wallet.privateKey);
}

// 生成以太钱包
generateWallet();
