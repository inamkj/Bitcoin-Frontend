import React, { useState } from 'react';
import axios from 'axios';
import Dataget from '../apis/data_api';
import weather_data from '../apis/weather_data';
import WeatherComponent from '../apis/weather_data';

const YouTubeSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [videos, setVideos] = useState([]);






    const API_KEY = 'AIzaSyAu4JIQ-9VNCSr-Se-2dWFy_MBfhWI3lYg';  





    const handleSearch = async () => {

        weather_data()
        // var response=await Dataget(searchTerm,API_KEY);
        // setVideos(response.data.items)
    };







    return (

        <div>
                    <WeatherComponent/>

            <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                placeholder="Search YouTube"
            />




            <button onClick={handleSearch}>Search</button>
            
            <div>
                {videos.map((video) => (
                    <div key={video.id.videoId}>
                        <h3>{video.snippet.title}</h3>
                        
                        <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                        <p>{video.snippet.description}</p>
                        <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                            Watch Video
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YouTubeSearch;
