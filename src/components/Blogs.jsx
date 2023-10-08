import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleAddToBookmarks,handleReadingTime}) => {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className="w-2/3 ">
            <h1 className="text-4xl">Blogs:{blog.length}</h1>
            {
                blog.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmarks={handleAddToBookmarks}
                    handleReadingTime={handleReadingTime}
                ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}
export default Blogs;