// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The listFestival of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: { url: 'http://localhost:3000' },
};

export const firebaseConfig = {
  apiKey: 'AIzaSyDdAALIOeSLefqVPdJ2eMuYnnp_Yi4i0Hc',
  authDomain: 'bdi-grp7.firebaseapp.com',
  projectId: 'bdi-grp7',
  storageBucket: 'bdi-grp7.appspot.com',
  messagingSenderId: '225218653730',
  appId: '1:225218653730:web:9c7da666bd216bc84da47b',
  measurementId: 'G-JZG6QK1FQQ',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
