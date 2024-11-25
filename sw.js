const title = 'Actions Notification';

const options = {
  body: 'How are you doing? )',
  image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?cs=srgb&dl=pexels-kellie-churchman-371878-1001682.jpg&fm=jpg',
  icon: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?cs=srgb&dl=pexels-kellie-churchman-371878-1001682.jpg&fm=jpg',
  badge: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?cs=srgb&dl=pexels-kellie-churchman-371878-1001682.jpg&fm=jpg',
  actions: [
    {
      action: 'reply',
      type: 'text',
      title: 'Reply',
      icon: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?cs=srgb&dl=pexels-kellie-churchman-371878-1001682.jpg&fm=jpg',
    }
  ],
};
self.addEventListener('push', () => {
  self.registration.showNotification(title, options);
});


self.addEventListener("notificationclick", event => {
  console.log({event})

})

self.addEventListener("reply", event => {
  console.log({eventReply: event})

})
