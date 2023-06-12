import './Home.css';
import HomeImages from '../HomeImages';
import HeadlineArticle from '../HeadlineArticle';
import HomeAside from '../HomeAside';
import NavigationBar from '../NavigationBar';


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