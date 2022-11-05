import React from "react";
import  emojis from "./emojipedia"; 
import "./styles.css";

function createEmoji(emojis){
     
     return(
       <Emoji 
          key = {emojis.id}
          emoji = {emojis.emoji}
          name = {emojis.name}
          meaning = {emojis.meaning}
       />
     )
}
function Emoji(props){
     
   return(
        <div className="term">
          <dt>
            <span className="emoji" role="img">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>
        
   );
}
function App() {
  return (
     
      <div>
         <h1>
        <span>emojipedia</span>
        </h1>
       <dl className="dictionary">{emojis.map(createEmoji)}</dl>
      </div>
    
  );
}

export default App;
