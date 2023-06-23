import { Link } from 'react-router-dom';
import posts from '../constants/posts';
import { useEffect, useState } from 'react';
import { Posts } from '../interfaces/posts';


const HeadlineArticle = () => { 

    useEffect(() => {

        const storage: Posts[] = posts;
        const setJson = JSON.stringify(storage);        
        localStorage.setItem('news', setJson);
        console.log('hi');
        

    }, []);


    // let retrieve: Posts[] | undefined = [];

    let [retrieve, setRetrieve] = useState<Posts[]>([])

    useEffect(() => {
 
        const json:any = localStorage.getItem('news');
        setRetrieve = JSON.parse(json);
        console.log(retrieve);
        
    })


    return (
        <article className='articleList'>
            {posts.map((story) => <div key={story.id}>

                <Link to={`/DetailsStory/${story.headLineURL}`} state={`${story.id}`}>

                    <div className="headlineArticle">

                        <div className='image'>
                            <img src={story.image} alt={story.imageTitle} />
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
export default HeadlineArticle;