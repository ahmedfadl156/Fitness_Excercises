function ExcercisesVideos({excerciseDetail , videosData , videosLoading}) {
  return (
    <section className="exercises-videos mx-auto max-w-6xl py-16 px-8">
      <div className="header mb-12 border-b-2 border-[#0580FA] pb-6">
        <h1 className="text-white text-xl lg:text-3xl capitalize font-bold">
          Videos For {excerciseDetail.name} From YouTube
        </h1>
        <p className="text-[#9CABBA] text-lg font-medium mt-2">
          Watch demonstration videos to perfect your form
        </p>
      </div>
      
      {videosLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-white text-xl">Loading videos...</div>
        </div>
      ) : (
        <div className="videos-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videosData.contents && videosData.contents.slice(0, 8).map((video) => (
            <div key={video.video.videoId} className="video-card bg-[#26303B] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={video.video.thumbnails[0].url} 
                  alt={video.video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-white text-sm font-semibold mb-3 line-clamp-2 leading-tight">
                  {video.video.title}
                </h3>
                
                <a 
                  href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#0580FA] text-white text-sm font-medium rounded-lg hover:bg-[#0466D3] transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Watch Video
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {!videosLoading && (!videosData.contents || videosData.contents.length === 0) && (
        <div className="text-center py-12">
          <div className="text-[#9CABBA] text-lg">
            No videos available for this exercise at the moment.
          </div>
        </div>
      )}
    </section>
  )
}

export default ExcercisesVideos
