const pushNotificationKey =
  'BDzLCuSdd94YK7zLXaPEPOiL0Uvc3dqriAxW1b7LGTkJhjtgaAWaF0A4BO9I25pGlgipArnWp0Gh_z2EfVgQVU4'

const URL = 'https://s29144.p1088.sites.pressdns.com/wp-json/wp/v2'

const isSupported = () => {
  return navigator && 'serviceWorker' in navigator && 'PushManager' in window
}

const requestSubscription = async () => {
  const consent = await askPermission()
  if (consent !== 'granted') return

  const subscription = await createSubscription()
  await saveSubscription(subscription)
}

const registerServiceWorker = () => {
  return navigator.serviceWorker.register(
    `${window.location.origin}/serviceWorker.js`
  )
}

const askPermission = async () => {
  return await Notification.requestPermission()
}

const createSubscription = async () => {
  const serviceWorker = await navigator.serviceWorker.ready

  return await serviceWorker.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(pushNotificationKey),
  })
}

const getCurrentSubscription = async () => {
  const serviceWorker = await navigator.serviceWorker.ready
  return await serviceWorker.pushManager.getSubscription()
}

const saveSubscription = (subscription) => {
  return fetch.post(`${URL}/push-notification/subscription`, subscription)
}

const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export {
  isSupported,
  requestSubscription,
  registerServiceWorker,
  getCurrentSubscription,
}
