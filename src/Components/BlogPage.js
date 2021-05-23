import {React} from 'react'
import { useHistory } from "react-router-dom";
import useFetch from '../useFetch';
// import ReactMarkdown from 'react-markdown';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './BlogPage.css';

function BlogPage() {

    const {blogpage,id,numberofblogs} = useFetch(); //Created a Custom hook so that it becomes easy for reusing

    //Added that number of blogs as well for taking care of that next button error as we click on beyond blogs number it produces an error.

    const description = `${blogpage.body}`;
    const coverimage = "http://127.0.0.1:8000/media/"+blogpage.coverImage;


    // const Component = ({description}) => {
    //     return (
    //       <SyntaxHighlighter language="python" style={dark}>
    //         {description ?? ''}
    //       </SyntaxHighlighter>
    //     );
    //   };

    // This Part is added for pushing it to 
    // the post based on the clicking the next 
    // or previous post but when I had just done 
    // this the url part is changed but the page 
    // is not changing but when i click on refresh 
    // then the page is being loaded according to
    // the URL So I thought of making the browser 
    // render when ID changed by adding that dependency
    // to the list of useEffect and now it worked fine
    //Idea initialized from https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router

    const history = useHistory();
    const prevPost = () => {
        history.push(`/blogs/${id-1}`);
    }
    const nextPost = () => {
        history.push(`/blogs/${(+ id)+ 1}`); //This is typecasting when i directly gave as id+1 its adding like a string like 1+1=11 so I had typecasted '-' worked but '+' diddnt worked :) :|.
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
                {/* <ReactMarkdown children={description} components={{
                    code:Component,
                }}></ReactMarkdown> */}
                <div className='blogpage-navigation'>
                    <button onClick={()=>{id > 1 ? prevPost(): console.log("You are at the extreme")}}>Previous</button>
                    <button onClick={()=>{id < numberofblogs ? nextPost(): console.log("You are at extreme")}}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default BlogPage