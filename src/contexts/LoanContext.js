import React from 'react';
import { getDatabase, ref, get, child } from 'firebase/database';
import { flatten } from '../utils/generics';

const LoanContext = React.createContext(null);

const LoanProvider = ({ children }) => {
    const [loans, setLoans] = React.useState([]);
    const database = getDatabase();

    const getLoans = async (userId) => {
        const dbRef = ref(database, `loans`);
        const snapshot = await get(child(dbRef, `/${userId}`));
        const dbLoans = flatten(snapshot.val());
        if (snapshot) setLoans(dbLoans);
        return dbLoans;
    };

    const value = {
        loans,
        getLoans
    };

    return <LoanContext.Provider value={value}>{children}</LoanContext.Provider>;
};

export { LoanContext, LoanProvider };
