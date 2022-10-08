import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const id = 1;

    const [blogs, setBlogs] = useState([
        { title: "My new Website", body: "lorem ipsum...", author: "Mario", id: 1 },
        { title: "Welcome Party", body: "lorem ipsum...", author: "Dev", id: 2 },
        { title: "Web Dev Top Tips", body: "lorem ipsum...", author: "Mohnish", id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);
    }

    useEffect(() => {
        console.log('use effect ran');
    });

    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = "This is the Title..." id = {id} handleDelete = {handleDelete} />
        </div>
    );
}
    
export default Home;
