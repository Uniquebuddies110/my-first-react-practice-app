import { React, useEffect, useState } from "react";

const Main = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(() => {
        // alert(`Hi I am clicked ${num}`);
        document.title = `You click me ${num} times`
    }, [num]);

    return (
        <>
            <button onClick={() => {
                setNum(num + 1)
            }}>Click me {num}</button>

            <button onClick={() => {
                setNums(nums + 1)
            }}>Click me {nums}</button>
        </>
    );
}

export default Main;