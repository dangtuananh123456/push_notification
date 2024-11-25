const webpush = require("web-push");

let result = webpush.generateVAPIDKeys();
console.log({ result });
// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BLd5PIMceWWRzNUF4heJ2-F5gX9yhegZIVuQnesBVaZnLabafWlKAODMw-WG97rZkfah0FKi6jc0AegPd553DUI",
  privateKey: "znjjUYQiYbxlvrF6x_sP1dmLE2ZlLeDOI6gSqNgX30k",
};

webpush.setVapidDetails(
  "mailto:dangtuananh3012003@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/cv9jeyfOA0s:APA91bEP_z9AM0u0mDaLjUmuFB5RGN6h4McXrU7I0hOz5NojBq0C_mMqsJP6ua8z7RGQSyS0aycr7mQepOEL7KAMvng3TT-91tJKKHv5vq9EgNotMONbJvpyi7_w7ir3-vohWX-hV3aX",
  "expirationTime": null,
  "keys": {
    "p256dh": "BIZBZ5ylMJBWiFQ6MnVilmui7iRbM7-zJ4AEy9i1SQXt_EWXph0oED0MAGiztFTLU6T7fdXBqHDZTcUt5K0I1EE",
    "auth": "yW1M2c1wG8xthQ6u56lytw"
  }
}


const fix = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/dnkeliUP2o8:APA91bHoO-cnXSPhtx6Dh33_rZH9OrkdEfCar65chbsCTZ3K2tkqb4S19WxcFPfNOetacdl262dSaw99vxJlN2hD2t6hmlTeklWpTwTYNA1cLqKDxLmmPFX_Eo3ritw3YoZ43RLxhYdM",
  "expirationTime": null,
  "keys": {
    "p256dh": "BPtmUg77eM-OW779A2mr0GAJTI0WmUdmnC6Z3wOUkN3JAEMpkwIInB1zlavyDHmnfrFIyZzBm0K0DNquPmENqwM",
    "auth": "8_9aoDUdIDWPP3oOvWr8wA"
  }
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
