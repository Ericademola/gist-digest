import imag from './Bola-Ahmed-Tinubu-1.png';

const HeadlineArticle = () => {
  return (
    <article>
        <div className="headlineArticle">
            <div className='image'>
                <img src={imag} alt="Bola Ahmed Tinubu" />
            </div>
            <div className='shortStory'>
                <h3>The Main Topic</h3>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
                </p>
            </div>
        </div>
        <div className="line"></div>
    </article>
  )
}
export default HeadlineArticle