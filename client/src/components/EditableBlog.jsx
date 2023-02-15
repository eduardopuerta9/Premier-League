import React from "react";

const EditableBlog = ({}) =>{
  return(
    <div>
    <h2><input type="text" required="required" placeholder="Enter a Team..." name="team" ></input></h2>
    <h3><input type="text" required="required" placeholder="Enter a Subject..." name="subject" ></input></h3>
    <p><input type="text" required="required" placeholder="Enter a Message..." name="message" ></input></p>
    
    </div>

  )
}
export default EditableBlog