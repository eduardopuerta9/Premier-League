import { useState } from 'react'
import axios from 'axios'
import React from 'react'
const EditBlog = ({ post, handleEditClick }) => {

  return (
    <div>
    <h2>Team: {post.team}</h2>
    <h3>Subject: {post.subject}</h3>
    <p>Message: {post.message}</p>
    <button type="button" onClick={(event)=> handleEditClick(event, post)}>Edit</button>
    </div>
  )
}
export default EditBlog