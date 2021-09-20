import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

// firebase init
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const FirebaseConfig = {
    apiKey: 'AIzaSyBeOE11fAnnEQTimqK8VClhlWMzyOu3ob8',
    authDomain: 'sozialnmedien.firebaseapp.com',
    databaseURL: 'https://sozialnmedien-default-rtdb.firebaseio.com',
    projectId: 'sozialnmedien',
    storageBucket: 'sozialnmedien.appspot.com',
    messagingSenderId: '584583202268',
    appId: '1:584583202268:web:60e4997e7a59138bdfbb19',
    measurementId: 'G-MFG92Y4C4F',
};

// if hosted on localhost, use FB emulator for database on port 9000
if (location.href.includes('localhost')) FirebaseConfig.databaseURL = 'http://localhost:9000?ns=sozialnmedien';

// Initialize Firebase
export const App = initializeApp(FirebaseConfig);
export const Analytics = getAnalytics(App);
export const Database = getDatabase();
export const Auth = getAuth();

// database root
export const DB_ROOT = '/Ci4j82hg96y36rfi96vfrwog7h85f4jh870bpgw52fekftt95hjo7d2i3jgie64k';
console.log('Log: firebaseinit.js loaded');