import { Link } from 'react-router-dom';
import posts from '../constants/posts';


const HeadlineArticle = () => {    

    return (
        <article className='articleList'>
            {posts.map((story) => <div key={story.id}>

                <Link to={`/DetailsStory/${story.headLineURL}`} state={`${story.id}`}>

                    <div className="headlineArticle">

                        <div className='image'>
                            <img src={story.image} alt={story.imageName} />
                        </div>

                        <div className='shortStory'>
                            <h3>{story.headLine}</h3>
                            <p>
                                {story.mainContent}
                            </p>
                        </div>

                    </div>

                </Link>

                <div className="line"></div>

            </div>)}
        </article>
    )
}
export default HeadlineArticle