const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Workflow", function () {
  it("should send and react to data", async function () {
    const Destination = await ethers.getContractFactory("Destination");
    const destination = await Destination.deploy();
    await destination.waitForDeployment();

    const Reactive = await ethers.getContractFactory("Reactive");
    const reactive = await Reactive.deploy(destination.target);
    await reactive.waitForDeployment();

    const Origin = await ethers.getContractFactory("Origin");
    const origin = await Origin.deploy();
    await origin.waitForDeployment();

    const [signer] = await ethers.getSigners();

    const tx1 = await origin.connect(signer).sendData(123);
    await tx1.wait();

    const tx2 = await reactive.connect(signer).reactToEvent(123, signer.address);
    await tx2.wait();

    expect(await reactive.destination()).to.equal(destination.target);
  });
});
