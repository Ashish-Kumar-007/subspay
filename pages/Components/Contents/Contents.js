import { useEffect, useState } from "react";
import axios from "axios";

const Contents = () => {
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    const options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/getcastDetails',
        params: {
          peopleid: 'nm0000375'
        },
        headers: {
          'X-RapidAPI-Key': 'eb6d935cd8msh72cce9ece9c9094p190e68jsn3572b40f3139',
          'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
  };
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/videos",
          {
            params: {
              part: "snippet",
              chart: "mostPopular",
              maxResults: 6,
              key: "YOUR_YOUTUBE_API_KEY",
            },
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    // fetchVideos();
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">Popular Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                {video.snippet.title}
              </h3>
              <p className="text-gray-600">{video.snippet.channelTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contents;
