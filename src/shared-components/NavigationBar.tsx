import AppName from "./AppName"

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <AppName />
      <nav className='buttons'>
        <button className='subcribe'>Subcribe now</button>
        <button className='login'>Login</button>
      </nav>
    </div>
  )
}
export default NavigationBar