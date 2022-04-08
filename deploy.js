const hre = require("hardhat");

async function main() {
  
  const profileimageMinterFactory  = await hre.ethers.getContractFactory("ProfileImageNfts");
  const profileimageContract = await profileImageMinterFactory.deploy();

  await profileimageContract.deployed();

  console.log (
   'Profile Image Minter Contract deployed to:', 
    profileImageContract.address
  )
}
  
;(async () => {
  try {
     await main ()
   } catch(error)  {
    console.error(error);
    process.exit(1)
  }
})()
