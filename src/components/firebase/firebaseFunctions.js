import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

import { firebaseConfig } from '../../config/firebase.config';

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const database = getDatabase(firebaseApp);

export { firebaseApp, auth, database };
