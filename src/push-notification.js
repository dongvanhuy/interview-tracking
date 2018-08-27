export const initializeFirebase = () => {
    Notification.requestPermission((status) => {
        console.log('Notification permission status:', status);
    });
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then((reg) => {
            // TODO 2.4 - Add 'options' object to configure the notification
            reg.showNotification('Hi world!');
        });
    }
};
