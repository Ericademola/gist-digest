import AppName from "../shared-components/AppName";
import Button from "../shared-components/Button";
import './SubmitStory.css';


const SubmitStory = () => {
  return (
    <div className="Submission">
        <AppName />
        <form action="" className="Submit_Story">
            <label htmlFor="">Story Headline</label>
            <br />
            <input type="text" placeholder="Write the Story's Headline Here" /> 
            <br />
            <label htmlFor="">Main Content</label>
            <br />
            <textarea placeholder='Write the Main Content Here'></textarea>
            <br />
            <label htmlFor="">More Content</label>
            <br />
            <textarea placeholder='Write Any Other Content Here'></textarea>
            <br />
            <label htmlFor="">Images</label>
            <br />
            <input type="image" />
            <br />
            <label htmlFor="">Image Name</label>
            <br />
            <input type="text" placeholder="Write the Image Title Here" />
            <br />
            <label htmlFor="">Author</label>
            <br />
            <input type="text" placeholder="Please Input You Name" />
            <br />
            <Button SubmitNews="Submit" />
        </form>
    </div>
  )
}
export default SubmitStory