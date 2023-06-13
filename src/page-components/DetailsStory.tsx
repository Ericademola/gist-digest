import './DetailsStory.css';
import imag from './Bola-Ahmed-Tinubu-1.png';
import AppName from '../shared-components/AppName';
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from "react-icons/ai"
import {  IoIosShareAlt } from "react-icons/io"



const DetailsStory = () => {
  return (
    <div className="DetailsStory">
        <AppName />
        <img src={imag} alt="Bola Ahmed Tinubu" />
        <div className='story-content'>
           <h1>heading</h1>
           <p>
            Tinubu was born in Lagos into the merchant family of Abibatu Mogaji, 
            the Ìyál'ọ́jà of Lagos. He is generally accepted in reliable sources to have been born in 1952;[2]
            this year of birth is sometimes disputed by political opponents, who argue that he is much older. 
            Some reliable sources note that his age has not been verified.
            <br />
            <br />
            Tinubu was born in Lagos into the merchant family of Abibatu Mogaji, 
            the Ìyál'ọ́jà of Lagos. He is generally accepted in reliable sources to have been born in 1952;[2]
            this year of birth is sometimes disputed by political opponents, who argue that he is much older. 
            Some reliable sources note that his age has not been verified.
            <br />
            <br />
            Tinubu was born in Lagos into the merchant family of Abibatu Mogaji, 
            the Ìyál'ọ́jà of Lagos. He is generally accepted in reliable sources to have been born in 1952;[2]
            this year of birth is sometimes disputed by political opponents, who argue that he is much older. 
            Some reliable sources note that his age has not been verified.
            <br />
            <br />
            Tinubu was born in Lagos into the merchant family of Abibatu Mogaji, 
            the Ìyál'ọ́jà of Lagos. He is generally accepted in reliable sources to have been born in 1952;[2]
            this year of birth is sometimes disputed by political opponents, who argue that he is much older. 
            Some reliable sources note that his age has not been verified.
            </p> 
        </div>
        <div className='comment-section'>
            <textarea placeholder='Leave a Comment'></textarea>
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