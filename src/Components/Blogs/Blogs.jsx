import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks, handleReadTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    console.log(blogs);
    return (
        <div className="rounded-md px-4 bg-slate-800 col-span-8">
            {blogs.map(blog => <Blog key={blog.id} item ={blog} handleBookmarks = {handleBookmarks} handleReadTime ={handleReadTime}></Blog>)}
        </div>
    );
};
Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleReadTime: PropTypes.func,
}
export default Blogs;