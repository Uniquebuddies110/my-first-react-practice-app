import { Button } from "@material-ui/core";
import { React, useState } from "react";

import '../css/ToDoList.css';

const ToDoList = () => {

    const [item, setItem] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        let itemVal = event.target.value;
        // console.log(itemVal);
        setItem(itemVal);
    }

    const onSubmit = () => {
        console.log(item);
        setItems((prevValue) => {
            return [
                ...prevValue,
                item
            ]
        });
        setItem("");

    }

    return (<>
        <div clasName="main_div">
            <div className="center_div">
                <br />
                <h1>To DO List</h1>
                <br />

                <input type='text' placeholder='To Do Item' onChange={itemEvent} value={item} />
                <Button className='newBtn' onClick={onSubmit} >Add</Button>
                <br />
                <ol>
                    {items.map((curItem) => {
                        return <li>{curItem}</li>;
                    })
                    }
                </ol>
                <br />

                <br />
            </div>
        </div>
    </>);
}

export default ToDoList;