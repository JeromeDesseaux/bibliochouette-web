import React from 'react';
import { getDatabase, ref, get, child } from 'firebase/database';
import { flatten } from '../utils/generics';

const PupilContext = React.createContext(null);

const PupilProvider = ({ children }) => {
    const [pupils, setPupils] = React.useState([]);
    const database = getDatabase();

    const getPupils = async (userId) => {
        const dbRef = ref(database, `users`);
        const snapshot = await get(child(dbRef, `/${userId}`));
        const dbPupils = flatten(snapshot.val());
        if (snapshot) setPupils(dbPupils);
        return dbPupils;
    };

    const value = {
        pupils,
        getPupils
    };

    return <PupilContext.Provider value={value}>{children}</PupilContext.Provider>;
};

export { PupilContext, PupilProvider };
