import {React} from 'react'
import { useHistory } from "react-router-dom";
import useFetch from '../useFetch';
import './BlogPage.css';

function BlogPage() {

    const {blogpage,id,numberofblogs} = useFetch();
    const description = `${blogpage.body}`;
    const coverimage = "https://api-pranavdhar.herokuapp.com/media/"+blogpage.coverImage;

    const history = useHistory();
    const prevPost = () => {
        history.push(`/blogs/${id-1}`);
    }
    const nextPost = () => {
        history.push(`/blogs/${(+ id)+ 1}`);
    }
    
    return (
        <div className='blog-page'>
            <div className='blog-content'>
                <div>
                    <p className='blog-title'>{blogpage.title}</p>
                </div>
                <div >
                    <p className='category'><b>Category:</b> {blogpage.category}</p>
                </div>
                <div>
                    <img className = 'blog-coverimage' src={coverimage} alt='CoverImage'/>
                </div>
                
                {/* This dangerouslySetInnerHTML is for rendering exactly the html elements in the div without escaping the html tags */}
                <div className='blog-description'
                    dangerouslySetInnerHTML={{
                    __html: description
                }}></div>
                <div className='blogpage-navigation'>
                    <button onClick={()=>{id > 1 ? prevPost(): console.log("You are at the extreme")}}>Previous</button>
                    <button onClick={()=>{id < numberofblogs ? nextPost(): console.log("You are at extreme")}}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default BlogPage