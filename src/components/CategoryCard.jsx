import { Link } from "react-router-dom"

function CategoryCard({category}) {
  return (
    <Link to={`/category/${category.name}`}>
    <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-700 hover:border-[#0580FA]">
      <div className="relative overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#0580FA] transition-colors duration-300">
          {category.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          Discover {category.name.toLowerCase()} exercises
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[#0580FA] text-sm font-medium">
            View Exercises →
          </span>
          <div className="w-8 h-8 bg-[#0580FA] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default CategoryCard
