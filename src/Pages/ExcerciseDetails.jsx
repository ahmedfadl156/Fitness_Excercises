import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ExcercisesVideos from '../components/ExcercisesVideos';
import SimilarExcercises from '../components/SimilarExcercises';
import { fetchVideos, videosOptions } from '../utils/FetchData';
import Loader from '../components/Loader';

function ExcerciseDetails() {
  const {id} = useParams();
  const [excerciseDetail , setExcerciseDetail] = useState({});
  const [videosData , setVideosData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videosLoading, setVideosLoading] = useState(false);

  useEffect(function(){
    async function fetchExcerciseDetail(){
      setLoading(true);
      try {
        const res = await fetch(`https://apiexcercises.vercel.app/api/v1/exercises/${id}`)
        const data = await res.json();
        setExcerciseDetail(data.data); 
        setLoading(false);
        
        if (data.data && data.data.name) {
          setVideosLoading(true);
          try {
            const videosData = await fetchVideos(`https://youtube-search-and-download.p.rapidapi.com/search?query=${encodeURIComponent(data.data.name)}&hl=en&gl=US&type=v&duration=s&sort=v` , videosOptions)
            setVideosData(videosData);
          } catch (videoError) {
            console.log('Failed to fetch videos, continuing without them:', videoError);
            setVideosData([]); 
          } finally {
            setVideosLoading(false);
          }
        }
      } catch (error) {
        console.log('Error fetching exercise details:', error);
        setLoading(false);
      }
    }
    fetchExcerciseDetail();
  },[id])

  if (loading) {
    return (
      <div>
        <Navbar />
        <section className="excercise-detail mx-auto max-w-6xl py-16 px-8">
          <div className="flex justify-center items-center h-64">
            <Loader size="large" text="Loading exercise details..." fullScreen/>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <section className="excercise-detail mx-auto max-w-6xl py-16 px-8">
        <div className="header">
        <h1 className='text-white text-xl lg:text-3xl capitalize font-bold'>{excerciseDetail.name}</h1>
        <p className='text-[#9CABBA] text-xl capitalize font-medium mt-4'>{excerciseDetail.bodyParts} Exercise</p>
        </div>
        <div className="video mt-12 bg-[#26303B] shadow-lg rounded-xl">
          <img src={excerciseDetail.gifUrl} alt={excerciseDetail.name} className='w-full h-[350px] md:h-[550px] lg:h-[800px] object-cover rounded-xl p-8' />
        </div>
        <div className="info mt-12 border-b-2 border-[#0580FA] py-5">
          <h2 className='text-white text-xl lg:text-3xl capitalize italic'>Exercise Information</h2>
          {excerciseDetail.instructions && excerciseDetail.instructions.map((instrucion , i) => (
          <p className='text-[#9CABBA] text-lg font-medium mt-4' key={i}>{instrucion}</p>
          ))}
        </div>
        <div className="info mt-6 border-b-2 border-[#0580FA] py-6 flex flex-col md:flex-row gap-6 text-center justify-between items-center px-16">
          <div className="target-muscels">
            <h2 className='text-white text-xl lg:text-3xl capitalize italic'>Target Muscles</h2>
            <p className='text-[#9CABBA] text-lg font-medium mt-4'>{excerciseDetail.targetMuscles && excerciseDetail.targetMuscles.join(', ')}</p>
          </div>
          <div className="secondary-muscels">
            <h2 className='text-white text-xl lg:text-3xl capitalize italic'>Secondary Muscles</h2>
            <p className='text-[#9CABBA] text-lg font-medium mt-4'>{excerciseDetail.secondaryMuscles && excerciseDetail.secondaryMuscles.join(', ')}</p>
          </div>
          <div className="equipments">
            <h2 className='text-white text-xl lg:text-3xl capitalize italic'>Equipments</h2>
            <p className='text-[#9CABBA] text-lg font-medium mt-4'>{excerciseDetail.equipments && excerciseDetail.equipments.join(', ')}</p>
          </div>
        </div>
      </section>
      <ExcercisesVideos excerciseDetail={excerciseDetail} videosData={videosData} videosLoading={videosLoading} />
      <SimilarExcercises />
    </div>
  )
}

export default ExcerciseDetails
