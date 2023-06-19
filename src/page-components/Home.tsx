import './Home.css';
import HomeImages from '../shared-components/HomeImages';
import HeadlineArticle from '../shared-components/HeadlineArticle';
import HomeAside from '../shared-components/HomeAside';
import NavigationBar from '../shared-components/NavigationBar';


const Home = () => {
  return (
    <div className="home">
      <NavigationBar />
      <header className="landing">
        <HomeImages />
      </header>
      <div className='main-content'>
        <HeadlineArticle />
        <HomeAside/>
      </div>
    </div>
  )
}
export default Home