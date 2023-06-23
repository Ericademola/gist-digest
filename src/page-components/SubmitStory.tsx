import { useEffect, useState } from "react";
import AppName from "../shared-components/AppName";
import Button from "../shared-components/Button";
import './SubmitStory.css';


const SubmitStory = () => {

  let [id, setID] = useState<number | null>(null);

  useEffect(() => {
    const json:any = localStorage.getItem('setSubmission');
    const submissionID = JSON.parse(json);
    id = submissionID.length + 4;
    
  })

  const [headLine, setHeadLine] = useState<string>('');
  const [mainContent, setMainContent] = useState<string>('');
  const [moreContent, setMoreContent] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [imageTitle, setImageTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [headLineURL, setHeadLineURL] = useState<string>('');
  const [like, setLike] = useState<number | null>(null);
  const [dislike, setDislike] = useState<number | null>(null);
  const [share, setShare] = useState<number | null>(null);


  const handleSubmission = (e: {preventDefault: () => void}) => {

    const setSubmission = [];

    e.preventDefault();
    const submission = {id, headLine, headLineURL, mainContent, moreContent, image, imageTitle, author, dislike, like, share};
    submission.headLineURL = submission.headLine.split(" ").join("-");
    
    setSubmission.push(submission);
    const json = JSON.stringify(setSubmission);
    localStorage.setItem('setSubmission', json);

    setHeadLine('');
    setMainContent('');
    setMoreContent('');
    setImage('');
    setImageTitle('');
    setAuthor('');
    setHeadLineURL('');
    setLike(null)
    setDislike(null);
    setShare(null);
    setID(null);
  }


  return (
    <div className="Submission">
      <AppName />
      <h2>Submit Your Story Here</h2>
      <form className="Submit_Story" onSubmit={handleSubmission}>

        <label>Story Headline</label>
        <br />
        <input
        name="Headline" 
        type="text" 
        placeholder="Write the Story's Headline Here"
        required
        value={headLine}
        onChange={(e) => setHeadLine(e.target.value)}/> 
        <br />

        <label>Main Content</label>
        <br />
        <textarea
        name="Main_Content" 
        placeholder='Write the Main Content Here'
        required
        value={mainContent}
        onChange={(e) => setMainContent(e.target.value)}></textarea>
        <br />

        <label>More Content</label>
        <br />
        <textarea
        name="Other_Content"
        placeholder='Write Any Other Content Here'
        required
        value={moreContent}
        onChange={(e) => setMoreContent(e.target.value)}
        ></textarea>
        <br />

        <label>Image</label>
        <br />
        <input 
        name="Image"
        type="text" 
        placeholder="Please input the image URL"
        required
        value={image}
        onChange={(e) => setImage(e.target.value)}
        />
        <br />

        <label>Image Name</label>
        <br />
        <input 
        name="Image_Title"
        type="text" 
        placeholder="Write the Image Title Here"
        required
        value={imageTitle}
        onChange={(e) => setImageTitle(e.target.value)}
        />
        <br />

        <label>Author</label>
        <br />
        <input 
        name="Author"
        type="text" 
        placeholder="Please Input Your Name"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        />
        <br />

        <Button SubmitNews="Submit" />

      </form>
    </div>
  )
}
export default SubmitStory