import reactLogo from '../assets/react.svg';

export default function Nav(){
    return (
      <div id='header-container'>
        <img src={reactLogo} id='react-logo'></img>
        <div id='react-facts'>ReactFacts</div>
        <div id='project-name'>React Course-Project 1</div>
      </div>
    )
  }
