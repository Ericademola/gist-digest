import { useEffect, useState } from 'react';
import posts from '../constants/posts';


const HomeImages = () => {

  let [topHeading, setTopHeading] = useState<string | undefined>(posts[0].headLine);
  const [topImage, setTopImage] = useState<string | undefined>(posts[0].image);
  const [topImageName, setTopImageName] = useState<string | undefined>(posts[0].imageName);
  

  useEffect(() => {

    const getHeadLines: (string | undefined)[] = posts.map((topic) => (topic.headLine));

    const getHeadLineImgs: (string | undefined)[] = posts.map((img) => (img.image));

    const getTopImageName: (string | undefined)[] = posts.map((imgName) => (imgName.imageName));


    function displayHeadings () {

      getHeadLines.push(getHeadLines[0]);

      getHeadLineImgs.push(getHeadLineImgs[0]);

      getTopImageName.push(getTopImageName[0]);

      setTopHeading(getHeadLines.shift());

      setTopImage(getHeadLineImgs.shift());

      setTopImageName(getTopImageName.shift())
      
      console.log(getHeadLines);
      
      console.log(getHeadLineImgs);
    }

    //setInterval(displayHeadings, 10000);

  }, [topHeading, topImage, topImageName])

  return (
    <div className='landing-images'>
      <h1> 
        {topHeading}
      </h1>
      <img src={topImage} alt={topImageName} />
    </div>
  )
}

export default HomeImages

