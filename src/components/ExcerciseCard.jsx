import { Link } from "react-router-dom"

function ExcerciseCard({excercise}) {
  return (
          <div className="bg-[#26303B] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 group">
      <div className="relative overflow-hidden">
        <img 
          src={excercise.gifUrl} 
          alt={excercise.name} 
          className="w-full h-90 object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <h3 className="text-white font-bold text-lg mb-3 capitalize leading-tight line-clamp-2">
          {excercise.name}
        </h3>
        
        <div className="space-y-2 mb-4">
          {excercise.targetMuscles && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                TARGET
              </span>
              <span className="text-gray-300 text-sm capitalize">
                {Array.isArray(excercise.targetMuscles) 
                  ? excercise.targetMuscles.slice(0, 2).join(', ') 
                  : excercise.targetMuscles}
              </span>
            </div>
          )}
          
          {excercise.bodyParts && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                BODY
              </span>
              <span className="text-gray-300 text-sm capitalize">
                {Array.isArray(excercise.bodyParts) 
                  ? excercise.bodyParts.slice(0, 2).join(', ') 
                  : excercise.bodyParts}
              </span>
            </div>
          )}
          
          {excercise.equipments && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                GEAR
              </span>
              <span className="text-gray-300 text-sm capitalize">
                {Array.isArray(excercise.equipments) 
                  ? excercise.equipments.slice(0, 2).join(', ') 
                  : excercise.equipments}
              </span>
            </div>
          )}
        </div>
        <div className="grid text-center mt-6">
        <Link to={`/excercises/${excercise.exerciseId}`} className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
          View Details
        </Link>
        </div>
      </div>
    </div>
  )
}

export default ExcerciseCard
