import CategoryCard from "./CategoryCard"
import { categories } from "../data"

function ExcercisesCategory() {
  return (
    <section className="mx-auto max-w-6xl my-16 px-8">
      <h1 className="text-xl md:text-3xl font-bold mb-4 text-white">Explore Excercise Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {
          categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))
        }
      </div>
    </section>
  )
}

export default ExcercisesCategory
