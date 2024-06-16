import { Component } from "react";
import Chatbot from "../Chatbot";
import Feedback from "../Feedback";
import './index.css'
class Home extends Component{
         state={
            chatbot:false,
            home:true,
            feedback:false,
         }
         shiftthome=()=>{
            const {chatbot,home}=this.state
            this.setState({
                chatbot:false,
                home:true,
                feedback:false,

            })
         }
         shiftchat=()=>{
            const {chatbot,home,feedback}=this.state
            this.setState({
                chatbot:true,
                home:false,
                feedback:false,
            })
         }
         shiftfeedback=()=>{
            const {chatbot,home,feedback}=this.state
            this.setState({
                chatbot:false,
                home:false,
                feedback:true,
            })
         }

    render(){
        const {chatbot,home,feedback}=this.state
        return(
            <div className="App_con">
             <div className="leftcontainer">
              <h2 className="menuheading">Menu</h2>
              <ul className="menuitem">   
                <button onClick={this.shiftthome} className="button_tag"><li>Home</li></button><br/>
                <button onClick={this.shiftchat} className="button_tag"><li>Chatbot</li></button><br/>
                <button onClick={this.shiftfeedback} className="button_tag"><li>Feedback</li></button>

              </ul>
             </div>
             <div className="rightcontainer">
               <h1 className="Chatbot">Chat bot for Collage Enquiry</h1>
               {home && ( <img src="https://pbs.twimg.com/profile_images/1203658757307170816/1gR_eRFZ_400x400.jpg" alt="rgukt"/>)}
               {chatbot&& <Chatbot/>}
               {feedback &&<Feedback/>}
             </div>
            </div>
        )
    }
}

export default Home