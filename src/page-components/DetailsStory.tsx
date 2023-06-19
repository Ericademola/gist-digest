import './DetailsStory.css';
import AppName from '../shared-components/AppName';
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from "react-icons/ai"
import {  IoIosShareAlt } from "react-icons/io"
import Button from '../shared-components/Button';
import posts from '../constants/posts';
import { useLocation } from 'react-router-dom';
import { Posts } from '../interfaces/posts';


const DetailsStory = () => {

    const id = useLocation();

    const fullStory: Posts | undefined = posts.find(story =>
        story.id == id.state
    );

    console.log(fullStory);   

    return (
        <div className="DetailsStory">
            <AppName />
            <img src={fullStory?.image} alt={fullStory?.imageName} />
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
                <textarea placeholder='Leave a Comment'></textarea>
                <br />
                <button>oya</button>
                {/* <Button /> */}
                <div className='icons'>
                    <span className='icon'>
                        <span className='icon-name'>Like </span>
                        <AiOutlineLike />
                    </span>
                    <span className='icon'>
                        <span className='icon-name'>Dislike </span>
                        <AiOutlineDislike />
                    </span>
                    <span className='icon'>
                        <span className='icon-name'>Share </span>
                        <IoIosShareAlt />
                    </span>
                    
                    {/* <span white like>AiFillLike</span> */}
                    {/* <span black like>AiFillDislike</span> */}
                </div>

            </div>
        </div>
    )
}
export default DetailsStory 