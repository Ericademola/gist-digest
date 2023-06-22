import './DetailsStory.css';
import AppName from '../shared-components/AppName';
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from "react-icons/ai"
import {  IoIosShareAlt } from "react-icons/io"
import Button from '../shared-components/Button';
import posts from '../constants/posts';
import { useLocation } from 'react-router-dom';
import { Comments } from '../interfaces/comment';
import { useState } from 'react';


const DetailsStory = () => {

    const id = useLocation();
    
    const fullStory = posts.find((story: { id: number; }) =>
        story.id == id.state
    );

    const [comment, setComment] = useState<string>(''); 
    // let CommentArray: any = []
    let commenting: string | undefined;

    const handleComment = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // let commenting = {}
        // let comments: Comments[] = [];
        alert("Omo I don break, as db no dey make you manage the comment section as you see am, pending on peding, na wa.") 
        commenting =  {comment}.comment
        console.log(comment);
        
        // console.log(fixComment);
        // commenting.fixComment
        
        // const getJson  = localStorage.getItem('comments');
        // console.log(getJson);
        
        // if (getJson !== null) {
        //     comments = JSON.parse(getJson);
        // }
        // let yo = Array.from(fixComment)
        // CommentArray = comments.push(fixComment);
        // console.log(comments);
        
        // const setJson = JSON.stringify(CommentArray);
        // let CommentArrayfgfg = localStorage.setItem('comments', setJson);
        // console.log(setJson);
        
        // setComment('')
    }

   
    const [postLikes, setPostLikes] = useState<number | null | undefined>(fullStory?.like);
    const [postDislikes, setPostDislikes] = useState<number | null | undefined>(fullStory?.dislike);
    const [like, setLike] = useState<number | null>(null);
    const [dislike, setDislike] = useState<number | null>(null);


    const addLike = () => {
        if (dislike === 1) {
            setDislike(null);
            setPostDislikes(postDislikes ? (postDislikes - 1) : postDislikes);
            setLike(1);
            setPostLikes(postLikes ? (postLikes + 1) : postLikes);
        }else if (like === null) {
            setLike(1);
            setPostLikes(postLikes ? (postLikes + 1) : postLikes);
        }
    }

    const addDislike = () => {
        if (like === 1) {
            setLike(null);
            setPostLikes(postLikes ? (postLikes - 1) : postLikes);
            setDislike(1);
            setPostDislikes(postDislikes ? (postDislikes + 1) : postDislikes);
        }else if (dislike === null) {
            setDislike(1)
            setPostDislikes(postDislikes ? (postDislikes + 1) : postDislikes);
        } 
    }
    

    return (
        <div className="DetailsStory">
            <AppName />
            <img src={fullStory?.image} alt={fullStory?.imageTitle} />
            <div className='story-content'>
                <h1>{fullStory?.headLine}</h1>
                <p>
                    {fullStory?.mainContent} 
                </p> 
                <p>
                    {fullStory?.moreContent} 
                </p>
                <p><i>Written By: </i><i>{fullStory?.author}</i></p>
            </div>
            <div className='comment-section'>

                <form onSubmit={handleComment}>
                    <textarea 
                        placeholder='Leave a Comment' 
                        required
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <br />
                    <Button commentName="Send Comment" />
                </form>

                <div className='icons'>
                    <span className='icon' onClick={addLike}>
                        <span className='icon-name'>Like </span>
                        <AiOutlineLike />
                        {postLikes}
                    </span>
                    <span className='icon' onClick={addDislike}>
                        <span className='icon-name'>Dislike </span>
                        <AiOutlineDislike />
                        {postDislikes}
                    </span>
                    <span className='icon'>
                        <span className='icon-name'>Share </span>
                        <IoIosShareAlt />
                    </span>
                    
                    {/* <span><AiFillLike /></span>
                    <span><AiFillDislike /></span> */}
                </div>

                <div className='commentPost'>
                    <p>{comment}</p>
                    {/* {CommentArray.map((comments: (any), index: (number)) => <div key={index}>
                        <p>{comments.comment}</p>
                    </div>)} */}
                </div>

            </div>
        </div>
    )
}
export default DetailsStory; 