import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { HiOutlineSearch } from "react-icons/hi";
import ExcerciseCard from "../components/ExcerciseCard";
import Pagination from "@mui/material/Pagination";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

function Excercises({ excercises, setExcercises }) {
  const [search, setSeacrh] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { category } = useParams();
  const ExcerciesPerPage = 12;
  const indexOfLastExcercise = currentPage * ExcerciesPerPage;
  const indexOfFirstExcercise = indexOfLastExcercise - ExcerciesPerPage;
  const currentExcercises = excercises.slice(
    indexOfFirstExcercise,
    indexOfLastExcercise
  );

  function paginate(e, value) {
    setCurrentPage(value);
    window.scrollTo({ top: 100, behavior: "smooth" });
  }

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setIsLoading(true);
        let apiUrl;
        if (category) {
          apiUrl = `https://apiexcercises.vercel.app/api/v1/exercises?search=${category}&limit=100`;
        } else {
          apiUrl = "https://apiexcercises.vercel.app/api/v1/exercises?limit=100";
        }
        
        const res = await fetch(apiUrl);
        const data = await res.json();
        setExcercises(data.data);
        setCurrentPage(1);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchExercises();
  }, [setExcercises, category]);

  async function handleSearch(e) {
    e.preventDefault();
    if (!search) return;

    try {
      const res = await fetch(
        `https://apiexcercises.vercel.app/api/v1/exercises?search=${search}&limit=100`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const excersiceData = await res.json();
      const exercises = excersiceData.data;

      if (!exercises || !Array.isArray(exercises)) {
        console.error("Invalid response format:", excersiceData);
        setExcercises([]);
        return;
      }

      const searchedExcercises = exercises.filter((excercise) => {
        const searchTerm = search.toLowerCase();

        const fieldContains = (field) => {
          if (!field) return false;
          if (typeof field === "string") {
            return field.toLowerCase().includes(searchTerm);
          }
          if (Array.isArray(field)) {
            return field.some(
              (item) =>
                typeof item === "string" &&
                item.toLowerCase().includes(searchTerm)
            );
          }
          return false;
        };

        return (
          fieldContains(excercise.name) ||
          fieldContains(excercise.equipments) ||
          fieldContains(excercise.bodyParts) ||
          fieldContains(excercise.targetMuscles)
        );
      });

      console.log(
        `Found ${searchedExcercises.length} exercises:`,
        searchedExcercises
      );
      setSeacrh("");
      setExcercises(searchedExcercises);
    } catch (error) {
      console.error("Error fetching exercises:", error);
      setExcercises([]);
    }
  }

  return (
    <div>
      <Navbar />
      <section className="excercises px-8 md:px-16 lg:px-32 py-16">
        {category ? (
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-white capitalize">{category} Exercises</h1>
            <p className="text-[#9CABBA] text-md mt-5">Discover {category.toLowerCase()} exercises to target specific muscle groups and achieve your fitness goals.</p>
            <button 
              onClick={() => window.location.href = '/excercises'} 
              className="mt-4 bg-[#0580FA] hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              ← Back to All Exercises
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-white">Excercises</h1>
            <p className="text-[#9CABBA] text-md mt-5">
              Explore a wide range of exercises to enhance your fitness journey.
              Filter by muscle group, equipment, or exercise type to find the
              perfect workout for your goals.
            </p>
          </div>
        )}
        <form onSubmit={handleSearch}>
          <div className="input relative">
            <HiOutlineSearch className="absolute left-1 top-13 text-lg transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSeacrh(e.target.value)}
              placeholder="Search for exercises"
              className="bg-[#26303B] text-white px-7 py-3 rounded-lg text-base w-full mt-7 outline-none transition-all duration-300 shadow-lg"
            />
          </div>
        </form>
        {isLoading ? 
          (
          <Loader size="large" text="Loading exercises..." fullScreen/>
        ) : (
          <div className="excercises grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {currentExcercises.map((excercise) => (
              <ExcerciseCard key={excercise.exerciseId} excercise={excercise} />
            ))}
          </div>
        )}
        {excercises.length > ExcerciesPerPage && (
          <div className="pagination flex justify-center mt-10">
            <Pagination
              count={Math.ceil(excercises.length / ExcerciesPerPage)}
              color="primary"
              shape="rounded"
              size="large"
              page={currentPage}
              onChange={paginate}
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "white",
                },
              }}
            />
          </div>
        )}
      </section>
    </div>
  );
}

export default Excercises;
