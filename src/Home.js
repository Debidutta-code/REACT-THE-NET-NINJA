import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const id = 1;

    const [blogs, setBlogs] = useState([
        { title: "My new Website", body: "lorem ipsum...", author: "Mario", id: 1 },
        { title: "Welcome Party", body: "lorem ipsum...", author: "Dev", id: 2 },
        { title: "Web Dev Top Tips", body: "lorem ipsum...", author: "Mario", id: 3 }
    ]);

    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = "All Blog." id = {id} />
            <BlogList blogs = {blogs.filter((blog) => blog.author === "Mario" )} title = "Mario's blog" id = {id} />
        </div>
    );
}
    
export default Home;
