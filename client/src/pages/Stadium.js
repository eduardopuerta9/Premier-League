import Review from '../components/Review'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Stadium = () => {
  const [reviews, setReviews] = useState([])

  const getReviews = async () => {
    try {
      let res = await axios.get('http://localhost:3001/reviews')
      setReviews(res.data)
    } catch (err) {}
  }
  const deleteReview = (id) => {
    axios.delete(`http://localhost:3001/reviews/delete/${id}`).then(() => {})
    window.location.reload()
  }

  useEffect(() => {
    getReviews()
  }, [])

  return (
    <div className="stadium">
      <h1>
        <center>Stadium Blog</center>
        <center>
          {' '}
          <img
            center
            src="https://media.istockphoto.com/id/1020966590/photo/cat-in-a-tie-with-a-white-keyboard.jpg?s=612x612&w=0&k=20&c=HAPUVZst99TuNtMj5k34ZacaS96hg0G0bl-dWt1jEYE="
            height={200}
          ></img>
          <Review getReviews={getReviews} />
          <h5>Posts:</h5>
          {reviews.map((review) => (
            <div key={review._id}>
              <h2>Stadium: {review.stadium}</h2>
              <h3>Subject: {review.subject}</h3>
              <p>Message: {review.message}</p>
              <div>
                <Link to={`/reviews/${review._id}`}>
                  <button type="button">UPDATE</button>
                </Link>
                <br></br>
                <button onClick={() => deleteReview(review._id)}>DELETE</button>
              </div>
            </div>
          ))}
        </center>
      </h1>
      <h3>
        <center></center>
      </h3>
    </div>
  )
}

export default Stadium
