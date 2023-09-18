const sdk = require("@lavanet/lava-sdk");

(async () => {

//Initialize Lava SDK to the selected API
const lavaSDK = await new sdk.LavaSDK({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
      projectId: "fe9753b84916bdde7c03394d9f9dc43c"
    },
    chainID: "APT1",
    rpcInterface:  "rest",
    geolocation: "2",
});

//Send a relay using the SDK
const info = await lavaSDK.sendRelay({
    method: "GET",
    url: "/",
});
console.log("=================== GET ACCOUNT RESOURCES ===========================")
  
  console.log(info)

})();

