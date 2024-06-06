import HomeContainer from "@/containers/home";
const API_URL = "https://api.themoviedb.org/3";
const getPopularMovies = async () => {
  const res = await fetch(
    `${API_URL}//movie/top_rated?api_key=${process.env.API_KEY}&page=1`
  );
  return res.json();
};
async function HomePage({ params }) {
  let selectedCategory;
  const { results: popularMovies } = await getPopularMovies();
  console.log("Ewewew", popularMovies);
  if (params.category?.length > 0) {
    selectedCategory = true;
  }
  return (
    <HomeContainer
      selectedCategory={{ 
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? popularMovies.slice(0, 7) : [],
      }}
      popularMovies={popularMovies}
    />
  );
}
export default HomePage;
