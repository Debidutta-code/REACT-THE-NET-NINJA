import { useState } from "react";

const Home = () => {

    const prevName = "Mohnish";
    const afterName = "D3v";

    // let name = "Mario";
    const [name, setName] = useState(prevName);
    const [age, setAge] = useState('19');
    const [n, setN] = useState(0);

    const handleClick = () => {
        if(n%2 === 0){ 
            setName(afterName);
            setAge('19');
            setN(n+1);
        }
        else{
            setName(prevName);
            setAge('20');
            setN(n+1);
        }
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p> {name} is {age} years old..</p>
            <p>count = { n }</p>
            <button onClick={handleClick}> click me</button>
        </div>
    );
}
    
export default Home;
