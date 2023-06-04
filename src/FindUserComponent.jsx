
import { useState } from "react"
import GithubUserComponent from "./GithubUserComponent";


const FindUserComponent = () => {

    const [userName, setUserName] = useState("");

    
    return (

        <div className="find-user">

            <h1>Find User</h1>
            <form>
            
            <input type="text" onChange={(event)=>setUserName(event.target.value)}></input>

            </form>

            <div className="result">

                {userName ? <GithubUserComponent userName={userName}></GithubUserComponent> : 'Please initiate a search!!!'}

            </div>
        
        </div>

    );

}

export default FindUserComponent;