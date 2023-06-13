//import image from './images/african-programmer.avif';
import imag from '../images/Bola-Ahmed-Tinubu-1.png';


const HomeImages = () => {
  return (
    <div className='landing-images'>
        <h1>
            Tinubu was born in Lagos into the merchant family of Abibatu Mogaji, 
            the Ìyál'ọ́jà of Lagos. He is generally accepted in reliable sources to have been born in 1952;[2]
            this year of birth is sometimes disputed by political opponents, who argue that he is much older. 
            Some reliable sources note that his age has not been verified.
        </h1>
        <img src={imag} alt="Bola Ahmed Tinubu" />
    </div>
  )
}
export default HomeImages