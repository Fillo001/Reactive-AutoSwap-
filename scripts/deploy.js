const hre = require("hardhat");

async function main() {
  const Destination = await hre.ethers.getContractFactory("Destination");
  const destination = await Destination.deploy();
  await destination.waitForDeployment();
  console.log("Destination deployed to:", destination.target);

  const Reactive = await hre.ethers.getContractFactory("Reactive");
  const reactive = await Reactive.deploy(destination.target);
  await reactive.waitForDeployment();
  console.log("Reactive deployed to:", reactive.target);

  const Origin = await hre.ethers.getContractFactory("Origin");
  const origin = await Origin.deploy();
  await origin.waitForDeployment();
  console.log("Origin deployed to:", origin.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
