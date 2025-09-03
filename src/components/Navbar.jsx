import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="relative flex justify-between items-center py-5 px-4 lg:px-16 bg-[#121417] text-white border-b-2 border-[#0580FA]">
      <Link to="/">
        <img src="/Logo.png" alt="Logo" className="logo h-8 lg:h-10" />
      </Link>
      
      <ul className="hidden md:flex gap-8">
        <li>
          <Link to="/" className="hover:text-[#0580FA] transition-colors">Home</Link>
        </li>
        <li>
          <Link to="/excercises" className="hover:text-[#0580FA] transition-colors">Excercises</Link>
        </li>
      </ul>
      
      <button className="hidden md:block bg-[#0580FA] text-white rounded-lg shadow px-4 py-2 cursor-pointer hover:bg-blue-600 transition-colors">
        Start Workout
      </button>

      <button 
        className="md:hidden flex flex-col gap-1 p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#121417] border-t border-[#0580FA] md:hidden z-50">
          <ul className="flex flex-col py-4">
            <li>
              <Link 
                to="/" 
                className="block px-4 lg:px-16 py-3 hover:bg-[#0580FA] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/excercises" 
                className="block px-4 lg:px-16 py-3 hover:bg-[#0580FA] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Excercises
              </Link>
            </li>
            <li className="px-4 lg:px-16 py-3">
              <button 
                className="w-full bg-[#0580FA] text-white rounded-lg shadow px-4 py-2 hover:bg-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Workout
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
