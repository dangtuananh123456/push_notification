const webpush = require("web-push");

// let result = webpush.generateVAPIDKeys();
// console.log({ result });
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
  "endpoint": "https://fcm.googleapis.com/fcm/send/fqQlAv6RfXQ:APA91bEpMeJJTTBXosiZOzLvG3lfvJeazam1kZr5K-rZt2QOk3zOxIUeBTTGWk_nljnAyFauMzwPYiApoqfw1CLm8-UPJIMbo4aipOjF-CoJARgh9Q1avp2hmfjJGbkVGjMV6RBaZGzK",
  "expirationTime": null,
  "keys": {
    "p256dh": "BP3yL2xQZX_QNyEMorYT1QyXfQZSgEjBrVY2QcNG21quUqznjDivyfwDGZBK44BKYUd8SWT0F8A7dTeknWFCA_Y",
    "auth": "uAiWLKRWoSJfyyhvBC8-4A"
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
