export const initialize = () => {
    Notification.requestPermission((status) => {
        console.log('Notification permission status:', status);
    });
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then((reg) => {
            // TODO 2.4 - Add 'options' object to configure the notification
            reg.showNotification('This is title', {
                body: 'this is body contain data message',
                icon: 'https://2.pik.vn/2018701006a6-d148-41ff-b127-8c9f2328a21e.png',
            });
        });
    }
};
