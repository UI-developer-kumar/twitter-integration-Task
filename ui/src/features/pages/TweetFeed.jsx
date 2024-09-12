import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTweets } from '../user/tweetSlice';
import { FaShareAlt, FaHeart, FaRegHeart, FaComment } from 'react-icons/fa';

function TweetFeed() {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets);

  useEffect(() => {
    // Fetch tweets from an API or local data 
    fetch('/api/tweets')
      .then((response) => response.json())
      .then((data) => dispatch(setTweets(data)));
  }, [dispatch]);

  // State to manage likes
  const [likedTweets, setLikedTweets] = useState(new Set());

  // State to manage shares and comments
  const [tweetInteractions, setTweetInteractions] = useState({});

  const handleLike = (tweetId) => {
    setLikedTweets((prevLikes) => {
      const newLikes = new Set(prevLikes);
      if (newLikes.has(tweetId)) {
        newLikes.delete(tweetId);
      } else {
        newLikes.add(tweetId);
      }
      return newLikes;
    });
  };

  const handleShare = (tweetId) => {
    setTweetInteractions((prevInteractions) => ({
      ...prevInteractions,
      [tweetId]: {
        ...prevInteractions[tweetId],
        shares: (prevInteractions[tweetId]?.shares || 0) + 1,
      },
    }));
  };

  const handleComment = (tweetId) => {
    setTweetInteractions((prevInteractions) => ({
      ...prevInteractions,
      [tweetId]: {
        ...prevInteractions[tweetId],
        comments: (prevInteractions[tweetId]?.comments || 0) + 1,
      },
    }));
  };

  return (
    <div>
      {tweets.map((tweet) => (
        <div key={tweet.id} className="tweet">

          <div className='tweet-container'>
              <div className='profile-img'>
                <img src={tweet.profileImg} alt="Profile" />
              </div>
              <div className='tweet-flex'>
                  <div className='tweet-username'>
                      <h3>{tweet.username}</h3>
                      <h4>{tweet.id}</h4>
                  </div>
                <p>{tweet.content}</p>
              </div>
          </div>

          <div className="tweet-actions">
            <button onClick={() => handleShare(tweet.id)} className="tweet-action">
                <FaShareAlt />
                <span>{tweetInteractions[tweet.id]?.shares || 0}</span>
            </button>
            <button onClick={() => handleLike(tweet.id)} className="tweet-action">
                   {likedTweets.has(tweet.id) ? <FaHeart /> : <FaRegHeart />}
            </button>
            <button onClick={() => handleComment(tweet.id)} className="tweet-action">
                  <FaComment />
                  <span>{tweetInteractions[tweet.id]?.comments || 0}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TweetFeed;