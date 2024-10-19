import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const GoToLastVideo = () => {
    const { channelId } = useParams();
    const navigate = useNavigate(); // Correct naming for the navigate function
    useEffect(() => {
        const fetchLatestVideo = async () => {
            try {
                const apiKey = 'AIzaSyBmCyHT6Af7ffp0YFBUdzPmPZkzrP5HlLQ'; // Replace with your API key
                const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=1&type=video&key=${apiKey}`;

                const response = await axios.get(url);
                const data = response.data;

                console.log('Fetched Data: ', data); // Check data in the console

                if (data.items && data.items.length > 0) {
                    const videoId = data.items[0].id.videoId;
                    window.location.href = `https://www.youtube.com/watch?v=${videoId}`;
                } else {
                    // Handle no video found case
                    navigate('/not-found');
                }
            } catch (error) {
                console.error('Error fetching the latest video:', error);
                navigate('/error');
            }
        };

        if (channelId) {
            fetchLatestVideo();
        }
    }, [channelId, navigate]);

    return <div id="preloader"></div>;
};

export default GoToLastVideo;
