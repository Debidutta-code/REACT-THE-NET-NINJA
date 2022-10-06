import { useState } from "react";

const Home = () => {

    // let name = "Mario";
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState('25');

    const handleClick = () => {
        setName('Dev');
        setAge('19');
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p> {name} is {age} years old..</p>
            <button onClick={handleClick}> click me</button>
        </div>
    );
}
    
export default Home;
