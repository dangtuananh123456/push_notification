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
const pushSubscription =
{
  "endpoint": "https://fcm.googleapis.com/fcm/send/c4UScEXnyiU:APA91bEOxh5L9Zl0pbq37PF3dzWpbHQPI7N3F8az6qU8AH4pIkJtczUYDdYBQ4QZEnUEB9t7cW03JFKaALNSx_0d9ucqOypevTmDmfLb_AD6uQPNw1jtIf_k14ZRekFuldHiqCZegGtd",
  "expirationTime": null,
  "keys": {
    "p256dh": "BL65nFuG5dczq-tLVaRiz5Pp_0MGg0dPYU7dD96igO7od0RWWO0rmAmiYFmJ4s5Ub6jGr5LAY8pof4-rYPYIWdc",
    "auth": "b2m2mUkOWzzyQCQc2gD-9A"
  }
}

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
