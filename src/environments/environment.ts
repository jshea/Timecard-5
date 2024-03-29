// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
// Initialize Firebase
  firebase: {
    apiKey: 'AIzaSyDIyltLPWhrqDU2TH07Ksv4vM2zJ3J6O-U',
    authDomain: 'timekeepingmobile.firebaseapp.com',
    databaseURL: 'https://timekeepingmobile.firebaseio.com',
    projectId: 'timekeepingmobile',
    storageBucket: 'timekeepingmobile.appspot.com',
    messagingSenderId: '988470328381'
  }
};
