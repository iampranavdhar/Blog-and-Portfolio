import {React,useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard'
import './Blogs.css'

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const query = `query{
        allPosts{
          id
          category
          title
          coverImage
          cardDescription
          body
        }
      }`

    useEffect(() => {
        const sendingPost = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({query}),
        };

         fetch('https://api-pranavdhar.herokuapp.com/graphql', sendingPost)
            .then(response => response.json())
            .then(data => setBlogs(data.data.allPosts));
    },[query])

    return (
        <div id='blogs'>
        <p className='blogs-title'>Blogs</p>
        <div className='blogs-container'>
            {blogs.map((blog) =>
            <Link to={`blogs/${blog.id}`} style={{textDecoration:'none',color:'black'}}>
                <BlogCard
                    coverimage={"https://api-pranavdhar.herokuapp.com/media/"+blog.coverImage}
                    category={blog.category}
                    title={blog.title}
                    descriptionpart={blog.cardDescription}
                />
            </Link>
            )}
        </div>
        </div>
    )
}

export default Blogs
