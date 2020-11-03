/* eslint-ignore */
function receivePushNotification(event) {
  if (!event.data) return;

  let data = {}
  try {
    data = event.data.json()
  } catch (e) {
    data.title = event.data.text()
  }

  const image = 'https://creditas.com/exponencial/favicon.ico'

  const options = {
    data: data.url || 'https://creditas.com',
    body: data.text,
    icon: data.image || image,
    vibrate: [200, 100, 200],
    tag: data.tag || 'Exponencial',
    image: data.image || image, 
    badge: image,
    actions: []
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
}

function openPushNotification(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data));
}

self.addEventListener('push', receivePushNotification);
self.addEventListener('notificationclick', openPushNotification);
