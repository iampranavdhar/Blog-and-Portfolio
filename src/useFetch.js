import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'


//This Custom hook is made for complete blogpage data and also the github api data fetch

const useFetch = () => {

    const {id} = useParams();
    const [blogpage,setBlogpage] = useState([])
    const [blogs,setBlogs] = useState([])
    
    const query =`query{
        postById(id:${id}){
          id
          category
          coverImage
          title
          body
        }
        allPosts{
            id
            category
            title
            coverImage
            cardDescription
            body
          }
      }
    `

    useEffect( ()=>{
        const sendingPost = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({query}),
        };
        fetch('https://api-pranavdhar.herokuapp.com/graphql', sendingPost)
            .then(response => response.json())
            .then(data => setBlogpage(data.data.postById));
        fetch('https://api-pranavdhar.herokuapp.com/graphql', sendingPost)
            .then(response => response.json())
            .then(data => setBlogs(data.data.allPosts));
    },[id,query])

    const numberofblogs = blogs.length;
    return {blogpage,id,numberofblogs};
}

export default useFetch
