import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { firebaseConfig } from '../../config/firebase.config';

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export { firebaseApp, auth };
