import './DetailsStory.css';
import AppName from '../shared-components/AppName';
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from "react-icons/ai"
import {  IoIosShareAlt } from "react-icons/io"
import Button from '../shared-components/Button';
import posts from '../constants/posts';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


const DetailsStory = () => {

    const id = useLocation();
    
    const fullStory = posts.find((story: { id: number; }) =>
        story.id == id.state
    );

    const comments = fullStory?.comments

    const [comment, setComment] = useState<string>(''); 
    let commenting: string | undefined;

    const handleComment = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert("The commenting function is under construction.") 
        commenting =  {comment}.comment
        
    }

   
    const [postLikes, setPostLikes] = useState<number | null | undefined>(fullStory?.like);
    const [postDislikes, setPostDislikes] = useState<number | null | undefined>(fullStory?.dislike);
    const [like, setLike] = useState<number | null>(null);
    const [dislike, setDislike] = useState<number | null>(null);
    const [showLike, setShowLike] = useState<boolean>(false);
    const [showdislike, setShowDislike] = useState<boolean>(false);



    const addLike = () => {
        if (dislike === 1) {
            setDislike(null);
            setShowDislike(false);
            setPostDislikes(postDislikes ? (postDislikes - 1) : postDislikes);
            setLike(1);
            setShowLike(true);
            setPostLikes(postLikes ? (postLikes + 1) : postLikes);
        }else if (like === null) {
            setLike(1);
            setShowLike(true);
            setPostLikes(postLikes ? (postLikes + 1) : postLikes);
        }
    }

    const addDislike = () => {
        if (like === 1) {
            setLike(null);
            setShowLike(false);
            setPostLikes(postLikes ? (postLikes - 1) : postLikes);
            setDislike(1);
            setShowDislike(true);
            setPostDislikes(postDislikes ? (postDislikes + 1) : postDislikes);
        }else if (dislike === null) {
            setDislike(1);
            setShowDislike(true);
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
                        {showLike ? (<AiFillLike />) : (<AiOutlineLike />) }
                        {postLikes}
                    </span>
                    <span className='icon' onClick={addDislike}>
                        <span className='icon-name'>Dislike </span>
                        {showdislike ? (<AiFillDislike />) : (<AiOutlineDislike />) }
                        {postDislikes}
                    </span>
                    <span className='icon'>
                        <span className='icon-name'>Share </span>
                        <IoIosShareAlt />
                    </span>
                    
                </div>

                <div className='commentPost'>
                    <p>{comment}</p>
                    <ul>
                        {comments && comments.map((comment) => <li key={comment}>
                            {comment}
                        </li>)}
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default DetailsStory; 