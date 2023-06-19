const Button = (props:any) => {

  const name = props.signUpName ?? props.signUpName ?? props.loginName ?? props.SubmitNews;

  return (
    
    <div className="button">
      <button>
        {name}
      </button>
    </div>
  )
}
export default Button