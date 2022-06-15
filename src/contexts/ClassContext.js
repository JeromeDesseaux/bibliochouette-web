import React from 'react';
import { getDatabase, ref, get, child } from 'firebase/database';
import { flatten } from '../utils/generics';

const ClassContext = React.createContext(null);

const ClassProvider = ({ children }) => {
    const [classes, setClasses] = React.useState([]);
    const database = getDatabase();

    const getClasses = async (userId) => {
        const dbRef = ref(database, `classes`);
        const snapshot = await get(child(dbRef, `/${userId}`));
        const dbClasses = flatten(snapshot.val());
        if (snapshot) setClasses(dbClasses);
        return dbClasses;
    };

    const value = {
        classes,
        getClasses
    };

    return <ClassContext.Provider value={value}>{children}</ClassContext.Provider>;
};

export { ClassContext, ClassProvider };
