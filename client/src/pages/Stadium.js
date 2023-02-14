import Review from '../components/Review'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Stadium = () => {
  const [reviews, setReviews] = useState([])

  const getReviews = async () => {
    try {
      let res = await axios.get('http://localhost:3001/reviews')
      setReviews(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getReviews()
  }, [])

  const deleteReview = (id) => {
    console.log(id)

    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  return (
    <div className="stadium">
      <h1>
        <center>Stadium Page</center>
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
            <div
              key={review._id}
              style={{
                border: 'solid white 2px',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                padding: '1 rem'
              }}
            >
              <h2>Stadium: {review.stadium}</h2>
              <h3>Subject: {review.subject}</h3>
              <p>Message: {review.message}</p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <button style={{ width: '60%', marginRight: '3rem' }}>
                  UPDATE
                </button>
                <button
                  onClick={() => deleteReview(review._id)}
                  style={{ width: '60%', marginRight: '1rem' }}
                >
                  DELETE
                </button>
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
