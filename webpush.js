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
  "endpoint": "https://fcm.googleapis.com/fcm/send/fznRzBbmY_o:APA91bHeGIeWUEeHruj-EQp3iYxy1bv39NPXtBDtsVtBfipoX9RWG0SLgyZQaR-i78aVdhk4H__jEfs8wVa6Q92fXH5fJUTho2WWtXFP-wR3VzWz_z65qYfz-BMAWDqoNgQu7MkZu0gb",
  "expirationTime": null,
  "keys": {
    "p256dh": "BGr5rpnoB84MFBFFlFOZNwbU-HRvpIAekcjGMu9uEX2r_CIQFHnzqoUnhINK48JknYPH5iYOcJ5ein46j-pg39k",
    "auth": "oriBIILjpbkK8HoLTDflKA"
  }
}


// {
//   "endpoint": "https://fcm.googleapis.com/fcm/send/co_6BXN38jQ:APA91bHrMe0AGrc1BHZ89RhuOQsORbpoGAy95eee4CaH6STC-6-gKweNXZdFqTPABLCvaBnrZbzOK6NnxxKIdA9k_lkwGMMIlusLyGRYR2hHAC4_Q_HRAMyP1HGuDRtcHIezVaWoKX-2",
//   "expirationTime": null,
//   "keys": {
//     "p256dh": "BPz3arY1g66tpFjORA-YRF42kq2pctoJ33PnFoxjP_5Pz6cJDBUYlYUObttWP-0Ff3S5kbmERX-IumeJb3xZBxA",
//     "auth": "JCjg-9mwqt7Kj8FpIZH-CA"
//   }
// }

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
