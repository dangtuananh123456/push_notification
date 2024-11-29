const title = 'Thông báo giao việc hằng ngày';

const options = {
  body: 'Vui lòng hoàn tất giao việc và chuyển Phiếu phân công công việc tổ sang trạng thái "Chờ duyệt" trước 15h hôm nay để đảm bảo tiến độ công việc.',
  image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?cs=srgb&dl=pexels-kellie-churchman-371878-1001682.jpg&fm=jpg',
  icon: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?cs=srgb&dl=pexels-kellie-churchman-371878-1001682.jpg&fm=jpg',
  badge: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?cs=srgb&dl=pexels-kellie-churchman-371878-1001682.jpg&fm=jpg',
  requireInteraction: true,
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
