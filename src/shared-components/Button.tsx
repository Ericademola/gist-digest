const Button = (props:any) => {

  const name = props.signUpName ?? props.signUpName ?? props.loginName ?? props.SubmitNews ?? props.commentName;

  return (
    
    <div className="button">
      <button type="submit">
        {name}
      </button>
    </div>
  )
}
export default Button