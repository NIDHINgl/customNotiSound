/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';

PushNotification.createChannel(
  {
    channelId: '112233',
    channelName: 'custom sound',
    channelDescription:
      'A custom channel to categorise your custom notifications',
    soundName: 'tjingle',
    importance: 4, // 4
    vibrate: true,
  },
  (created) => console.log(`createChannel returned '${created}'`),
);

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
  }, // (required) Called when a remote or local notification is opened or received
  onNotification: function (notification) {
    console.log('REMOTE NOTIFICATION ==>', notification); // process the notification here
  },
  onNotificationOpenedApp: function (remoteMessage) {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  },
  getInitialNotification: function (remoteMessage) {
    console.log(
      'Notification caused app to open from quit state:',
      remoteMessage.notification,
    );
  },
  // Android only: GCM or FCM Sender ID
  senderID: '638137827026',

  playSound: true,
  soundName: 'tjingle',
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});

AppRegistry.registerComponent(appName, () => App);
