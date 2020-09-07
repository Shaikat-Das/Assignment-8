import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import './PostDetail.css'


const PostDetail = () => {

    


    const {id}= useParams();
    const [comment, setComment]= useState([]);
    // const [photo, setPhoto]= setState([]);
    useEffect(() => {

                const url = `https://jsonplaceholder.typicode.com/comments/${id}`; 
                fetch(url)
                .then(res=> res.json())
                .then(data=> setComment(data));
                    }, [])

    //  useEffect(() => {

    //             const url = `http://jsonplaceholder.typicode.com/photos/${id}`; 
    //             fetch(url)
    //             .then(res=> res.json())
    //             .then(data=> setPhoto(data));
    //                         }, [])
                        
        return (
        
                    <div>
                        {/* <h3>Post detail of id {id} is given below</h3> */}
                        <img src="/images/1.png" alt=" "/>
                        <h3>User Name:<small> {comment.name}</small></h3>
                        <br/>
                        <p><b>Comment:</b> {comment.body}</p>
                        {/* <p>{photo.url}</p> */}
                    </div>

     

    );
};

export default PostDetail;