import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [Blog,setBlog]=useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])
    return (
        <div className="w-2/3 bg-red-400">
            <h1 className="text-4xl">Blogs:{Blog.length}</h1>
        </div>
    );
};

export default Blogs;