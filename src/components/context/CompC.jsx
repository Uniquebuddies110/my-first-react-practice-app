import React from 'react';
import { FirstName, LastName } from './ContextApp';

const CompC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (<>
                        <LastName.Consumer>{(lname) => {
                            return (< h1 > Hi Welcome to {fname} {lname}</h1>);
                        }}</LastName.Consumer>
                    </>)
                }}
            </FirstName.Consumer>
        </>
    );
}

export default CompC;