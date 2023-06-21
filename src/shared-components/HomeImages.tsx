import { useEffect, useState } from 'react';
import posts from '../constants/posts';


const HomeImages = () => {

  let [topHeading, setTopHeading] = useState<string | undefined>(posts[0].headLine);


  //THE STUPID FUNCTION GIVING ME SLEEPLESS NIGHT

  const getHeadLines: (string | undefined)[] = posts.map((topic) => (topic.headLine));

  let n:number = 0;

  function displayHeadLine() {

    topHeading = getHeadLines[n];
    if (n === getHeadLines.length) {
      topHeading = getHeadLines[0]
    }
    if (n < getHeadLines.length) {
      n++;
    } else {
      n = 0;
    }
    console.log(n);
    console.log(topHeading);
        
  }

  //setInterval(displayHeadLine, 3000);
  

  useEffect(() => {

    const getHeadLines: (string | undefined)[] = posts.map((topic) => (topic.headLine));

    let n:number = 0;

    function displayHeadLine() {
  
      topHeading = getHeadLines[n];
      if (n === getHeadLines.length) {
        topHeading = getHeadLines[0]
      }
      if (n < getHeadLines.length) {
        n++;
      } else {
        n = 0;
      }
      console.log(n);
      console.log(topHeading);
      
      setTopHeading(topHeading);
      
    }
  
    // setInterval(displayHeadLine, 5000);

  }, [topHeading]);


  let [topImage, setTopImage] = useState<string | undefined>(posts[0].image);

  useEffect(() => {

    const getHeadLineImgs: (string | undefined)[] = posts.map((img) => (img.image));

    let n:number = 0

    function displayHeadLineImgs() {
  
      topImage = getHeadLineImgs[n];
      if (n === getHeadLineImgs.length) {
        topImage = getHeadLineImgs[0]
      }
      if (n < getHeadLineImgs.length) {
        n++;
      } else {
        n = 0;
      }
      console.log(n);
      console.log(topImage);      
      
      setTopImage(topImage);
      
    }

    // setInterval(displayHeadLineImgs, 5000);

  }, [topImage]);


  let [topImageName, setTopImageName] = useState<string | undefined>(posts[0].imageTitle);

  useEffect(() => {

    const getTopImageName: (string | undefined)[] = posts.map((imgName) => (imgName.imageTitle));

    function displayTopImageName() {

      let n:number = 0
  
      topImageName = getTopImageName[n];
      if (n === getTopImageName.length) {
        topImageName = getTopImageName[0]
      }
      if (n < getTopImageName.length) {
        n++;
      } else {
        n = 0;
      }
      console.log(n);
      console.log(topImageName);
      
      setTopImageName(topImageName);
      
    }

    // setInterval(displayTopImageName, 5000);

  }, [topImageName]);


  return (
    <div className='landing-images'>
      <h1> 
        {topHeading}
      </h1>
      <img src={topImage} alt={topImageName} />
    </div>
  )
}

export default HomeImages;

