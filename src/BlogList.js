const BlogList = ( {title, blogs, id, handleDelete} ) => {
    
    // const blogs = props.blogs;
    // const title = props.title;
    
    return (
        <div className="blog-list">
            <h1>{id}. {title} </h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2> { blog.title } </h2>
                    <p>Written by - { blog.author } </p>
                    <button onClick={() => handleDelete(blog.id)}> Delete </button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;