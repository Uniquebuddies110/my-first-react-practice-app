import { createContext, React } from "react";
import CompA from "./CompA";


const FirstName = createContext();
const LastName = createContext();

const ContextApp = () => {
    return (
        <>
            <FirstName.Provider value="Ajay">
                <LastName.Provider value="Cheke">
                    <CompA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
}

export default ContextApp;
export { FirstName, LastName };