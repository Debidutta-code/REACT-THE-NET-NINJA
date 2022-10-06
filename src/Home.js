const Home = () => {

    const text1 = "click me";
    const text2 = "click me again";

    const handleClick = (e) => {
        console.log('hello, Ninjas', e);
    }

    const handleClickAgain = (name, e) => {
        console.log("hello " + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}> {text1} </button>
            <button onClick={(e) => {handleClickAgain("dev", e);}}> {text2} </button>
        </div>
    );
}
    
export default Home;
