import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import UseFetch from "./UseFetch";

const Home = () => {

    const id = 1;

    const {data : blogs, isPending, error} = UseFetch('http://localhost:8000/blogs');

    

    return ( 
        <div className="home">
            { error && <div> { error }</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title = "This is the Title..." id = {id}/>}
        </div>
    );
}
    
export default Home;
