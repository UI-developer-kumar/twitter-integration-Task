import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTweet } from '../user/tweetSlice';

function TweetForm() {

  const {username, id, profileImg} = useSelector(state => state.auth)
  // console.log(profileImg);
  

  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTweet({ content, username , id, profileImg})); // Replace 'User' with actual user data
    setContent('');
  };

  return (
   
      <div className='tweet-form-contaner'>
        
        <img className='profile-img' src={profileImg} alt="img" />

          <div className='form-contanier'>
              <form onSubmit={handleSubmit}>
                <div className='textarea'>
                    <textarea className='tweet-box hidden-scrollbar'
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="What's happening?!"
                    />
                </div>
                <div className='post-btn'>
                <button type="submit">Post</button>
                </div>
              </form>
          </div>
     </div>

  );
}

export default TweetForm;