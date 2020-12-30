import React, { useContext } from 'react';
import CompC from './CompC';
import { FirstName, LastName } from './ContextApp';



const CompB = () => {

    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    // return <CompC />

    return (<>< h1 > Hi Welcome to {fname} {lname}</h1></>);
}

export default CompB;