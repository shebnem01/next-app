import HomeContainer from "@/containers/home";

export default function HomePage({params}) {
    let selectedCategory;
    if(params.category.length>0){
        selectedCategory=true
    }
  return <HomeContainer/>
}
