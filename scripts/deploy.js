const main = async () => {

    const domainContractFactory = await ethers.getContractFactory('Domain');
    const domainContact = await domainContractFactory.deploy('xyz');
    await domainContact.deployed();

    console.log("Contract Address : " , domainContact.address );

    let tx = await domainContact.register("vitalik", {value: hre.ethers.utils.parseEther('0.1')});
    await tx.wait()
    console.log(" Successfully minted vitalik.xyz");

    txn = await domainContact.setRecord("vitalik", "I am co-founder of Ethereum!");
    await txn.wait();
    console.log("Set Record for vitalik.xyz ");

    const address = await domainContact.getAddress("vitalik");
    console.log("Owner of vitalik domain", address );
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1)     
    }
}

runMain()