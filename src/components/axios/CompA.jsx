import axios from "axios";
import { React, useEffect, useState } from "react";
import OptionsComp from "./OptionsComp";

const CompA = () => {
    const [num, setNum] = useState();
    const [user, setUser] = useState();

    useEffect(() => {

        // alert("Hi");
        async function getData() {
            const res = await axios.get(`http://localhost:8080/emp/api/get/${num}`);
            setUser(res.data.name);
            console.log(user);
        }

        getData();
    });



    return (<>
        <h1>Hi Go App {user}</h1>
        <br />

        <select value={num} onChange={
            (event) => {
                setNum(event.target.value);
            }
        }
        >
            <OptionsComp />

        </select>
    </>);
}

export default CompA;