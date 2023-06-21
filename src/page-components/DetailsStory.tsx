import './DetailsStory.css';
import AppName from '../shared-components/AppName';
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from "react-icons/ai"
import {  IoIosShareAlt } from "react-icons/io"
import Button from '../shared-components/Button';
import posts from '../constants/posts';
import { useLocation } from 'react-router-dom';
import { Comments } from '../interfaces/comment';
import { useState } from 'react';

//God come help me oooo
const DetailsStory = () => {

    const id = useLocation();
    
    const fullStory = posts.find((story: { id: number; }) =>
        story.id == id.state
    );

    const [comment, setComment] = useState<string>(''); 
    const CommentArray: Comments[] = [];

    const handleComment = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const fixComment = {comment};
        CommentArray.push(fixComment);
        console.log(CommentArray);
        setComment('');
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
                    
                    <span><AiFillLike /></span>
                    <span><AiFillDislike /></span>
                </div>

                <div className='commentPost'>
                    <p>for comments</p>
                </div>

            </div>
        </div>
    )
}
export default DetailsStory; 