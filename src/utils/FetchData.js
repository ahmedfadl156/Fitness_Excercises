export const videosOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 1000; 

export async function fetchVideos(url, options) {
  try {
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime;
    
    if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
      const waitTime = MIN_REQUEST_INTERVAL - timeSinceLastRequest;
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
    
    lastRequestTime = Date.now();
    
    const res = await fetch(url, options);
    
    if (!res.ok) {
      if (res.status === 403) {
        throw new Error(`API key invalid or expired (403)`);
      } else if (res.status === 429) {
        throw new Error(`Rate limit exceeded (429). Please wait before making more requests.`);
      } else {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    }
    
    const data = await res.json();
    return data; 
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
}