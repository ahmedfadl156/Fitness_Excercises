import { Link } from "react-router-dom";

function TrendingCards({workout}) {
  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'bg-green-500'
      case 'Intermediate': return 'bg-yellow-500'
      case 'Advanced': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-700 hover:border-[#0580FA]">
      <div className="relative overflow-hidden">
        <img 
          src={workout.image} 
          alt={workout.name} 
          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className={`${getLevelColor(workout.level)} text-white text-xs px-2 py-1 rounded-full font-medium`}>
            {workout.level}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#0580FA] transition-colors duration-300">
          {workout.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {workout.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-[#0580FA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300 text-sm">{workout.duration}m</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <span className="text-gray-300 text-sm">{workout.calories} cal</span>
            </div>
          </div>
        </div>
        
        <Link 
          to={`/category/${workout.category}`}
          className="block w-full bg-[#0580FA] text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg text-center"
        >
          Start Workout
        </Link>
      </div>
    </div>
  )
}

export default TrendingCards
