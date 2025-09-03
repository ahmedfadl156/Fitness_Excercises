import Navbar from "../components/Navbar"
import ExcercisesCategory from "../components/ExcercisesCategory"
import TrendingWorkouts from "../components/TrendingWorkouts"

function Home() {
  return (
    <div className="">
      <Navbar />
      <section className="hero-section relative h-[70vh] flex items-center">
        <img 
          src="Hero.avif" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-16 w-full h-full flex items-center">
          <div className="max-w-2xl text-white text-center md:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              Transform Your <span className="text-[#0580FA]">Body</span>
            </h1>
            <p className="text-base lg:text-xl mb-6 leading-relaxed text-gray-200">
              Unlock your potential with personalized workout plans, expert guidance, and a community that supports your fitness journey.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button className="bg-[#0580FA] text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>
      <ExcercisesCategory />
      <TrendingWorkouts />
    </div>
  )
}

export default Home
