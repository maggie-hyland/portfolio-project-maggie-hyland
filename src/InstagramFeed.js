import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstagramFeed = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Function to fetch the Instagram photos
    const fetchInstagramPhotos = async () => {
      try {
        const response = await axios.get(
          'https://graph.instagram.com/{user-id}/media?fields=media_url,permalink&access_token={access-token}&limit=10'
        );

        // Extract the photos from the API response
        const { data } = response;
        if (data && data.data) {
          setPhotos(data.data);
        }
      } catch (error) {
        console.error('Error fetching Instagram photos:', error);
      }
    };

    // Call the fetchInstagramPhotos function when the component mounts
    fetchInstagramPhotos();
  }, []);

  return (
    <div>
      <h2>Instagram Feed</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <a href={photo.permalink} target="_blank" rel="noopener noreferrer">
              <img src={photo.media_url} alt="Instagram" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstagramFeed;