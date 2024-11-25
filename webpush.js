const webpush = require("web-push");

// let result = webpush.generateVAPIDKeys();
// console.log({ result });
// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BMGGpAwp9T7Aw8J5oXsq4Ls0zw_kVwgFgkQ9w23ytvlrq9PcQ1o1hhN9kShZ5weyyllesO2rgIcgVbKGkV6Xf4w",
  privateKey: "pZ3HcZbp00IrtKUOA4-oKZR4iB04nKKLhP3Robtk6qs",
};

webpush.setVapidDetails(
  "mailto:dangtuananh3012003@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/fSV5QuKQZxI:APA91bG8554ZM7X4vdeD3G1xL5Bb6N4Gll4c034wMSYeDvS5edVAQTS13B9gQXtsqKSPtyqSsawn_4Yn0e5YSkDoLj8lng08h5Tl-Lb2gxc0Q9b2loSWK4TF5OjPZlSHwpCTsfc0nIKf",
  "expirationTime": null,
  "keys": {
    "p256dh": "BN9cFp1A6txR7T8AzmqTHlKIFtDga4m6g6DvjXcTyuFuhedOCPxa4bl6ImZO3RTTsyNX-2fwpHWZ57eAm0ex_ic",
    "auth": "KBjg-4pEYcZPTs6X1Z1KWw"
  }
}

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
