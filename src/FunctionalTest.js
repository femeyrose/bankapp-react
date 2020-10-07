import React,{useState} from 'react';


function FunctionalTest(){
    const [count,setCount]=useState(0);
    return (
        <div>
            <p> Count: {count}</p>
         <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    );
}

export default FunctionalTest;

//functional component has no state component instead we use useState
//import the useState
//import FunctionalTest in App.js and define the <FunctionalTest> to get this component
