const hre = require("hardhat");

async function main() {
  const originAddr = "PASTE_ORIGIN_ADDRESS";
  const reactiveAddr = "PASTE_REACTIVE_ADDRESS";
  const destinationAddr = "PASTE_DESTINATION_ADDRESS";

  const Origin = await hre.ethers.getContractAt("Origin", originAddr);
  const Reactive = await hre.ethers.getContractAt("Reactive", reactiveAddr);
  const Destination = await hre.ethers.getContractAt("Destination", destinationAddr);

  const [signer] = await hre.ethers.getSigners();

  console.log("Sending data from Origin...");
  const tx = await Origin.connect(signer).sendData(100);
  await tx.wait();

  console.log("Reacting through Reactive...");
  const tx2 = await Reactive.connect(signer).reactToEvent(100, signer.address);
  await tx2.wait();

  console.log("Check events on Destination via block explorer.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
