import { TrendingWorkoutsData } from "../data"
import TrendingCards from "./TrendingCards"

function TrendingWorkouts() {
  return (
    <section className="mx-auto max-w-6xl my-16 px-8">
      <h1 className="text-xl md:text-3xl font-bold mb-4 text-white">Trending Workouts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {
          TrendingWorkoutsData.map((workout) => (
            <TrendingCards key={workout.id} workout={workout} />
          ))
        }
      </div>
    </section>
  )
}

export default TrendingWorkouts
