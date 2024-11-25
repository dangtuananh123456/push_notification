const webpush = require("web-push");

// let result = webpush.generateVAPIDKeys();
// console.log({ result });
// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BLGT3uloHwB_V6ozWLHJuux87VLnH5mlkgWNNqS1ZMNanGISbJWiMYkxYNopmC5Sv-aWljcSrjflaGpl6PMRTAY",
  privateKey: "8vzv0g3MH37mOPkP-jf4bMdnr2TncmGYOSoJtInJtbU",
};

webpush.setVapidDetails(
  "mailto:dangtuananh3012003@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cdcL_l0dxgM:APA91bFPSXJhtkHhZFJfs6Q5OxYR2lPHE_uxP7eIVCcRFHnNkABtt9-A3cV5sMGW2HzggF90zklD1Ai89HAwb_IJMWpaa6CywHrMeNfGmp9NBlXD73wFDakJa8Qenqn5O9ISbXLXQyYs",
  expirationTime: null,
  keys: {
    p256dh:
      "BGc6yCWxlZ_umymloVxpoa2MgqSe6bwcfQtWQGOc3zFZJp42Ui74gAZnc4jcCAIqebodat5VwyowsP4fbijCNzE",
    auth: "Bxj4DxFPm0ljmncgTd5hyg",
  },
};

const fix = {
  endpoint:
    "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABnPwcVrzUCOW629inYQcTtmz_uDOFlPwDIm9EZsp7UD79AhGFokVCnwJagL6sG7EIK9TX59DJjtS4wU2setLYK96pKXycmkJwyjeKfIWBcSGrpsFAj3aZM4yw2Q5WpiBD8T8pN-qbRQT-K_9sDSHUOUwsXjG1zDZQCsL4A43UCFNTQKic",
  expirationTime: null,
  keys: {
    auth: "gICk3jKeqDm51znREXCRgg",
    p256dh:
      "BFeA_YbmCyJ5zj9X0DFBxFiqqianUfdYz5Bw9BDKOqUedzXiP5XTZnLxPQkh40hAXPt6gFO_Kk4wVF24AN06evA",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
