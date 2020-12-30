import { React, useEffect, useState } from "react";
import axios from "axios";

const OptionsComp = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getAllUser() {
            const res = await axios.get(`http://localhost:8080/emp/api/All`);
            setUsers(res.data);
            console.log(users);
        }

        getAllUser();
    }, []);

    return (
        <>
            <option value="">Select One</option>

            {
                users.map((curVal, index) => {
                    console.log(`${index} ${curVal.id}`)
                    let id = curVal.id;
                    return (
                        <>
                            <option key={index} value={curVal.id}>{curVal.id}</option>
                        </>
                    );
                })
            }
        </>
    );
}

export default OptionsComp;