// Import and configure the Firebase SDK

// Import the functions you need from the SDKs you need
//importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js');
//importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging.js');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOVN1qOGzsD6AI-2jA05LpfQIJ5aoCuD4",
  authDomain: "clouding-aa740.firebaseapp.com",
  projectId: "clouding-aa740",
  storageBucket: "clouding-aa740.appspot.com",
  messagingSenderId: "1059589787087",
  appId: "1:1059589787087:web:cdd636057d2a921ccdd6ba",
  measurementId: "G-CD2BEK39LZ"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const messaging = getMessaging(app);

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically 
// and you should use data messages for custom notifications.
// For more info see: 
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
