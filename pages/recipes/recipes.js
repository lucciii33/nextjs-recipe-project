import styles from "../../styles/Recipes.module.css";
import Image from "next/image";
import Link from "next/Link"
export const getStaticProps = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cac0ff8c40msh8d6b13eceeb7d54p149d44jsn09a410dae8d1",
      "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
    },
  };

  // const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  // const data = await res.json();

  const res = await fetch(
    "https://edamam-recipe-search.p.rapidapi.com/search?q=chicken",
    options
  );
  const data = await res.json();

  console.log(data);

  // return {
  //     props: {comments: data}
  // }

  return {
    props: { reci: data },
  };
};

const Recipes = ({ reci }) => {
  return (
    <div>
      <h1 className={styles.titleRecipes}> recipes</h1>
      {reci.hits.map((recipe) => (
        <Link href={'/recipes/' + recipe.recipe.label} key={recipe.recipe.uri}>
        <a className={styles.single}>
        <h1>{recipe.recipe.label}</h1>
        </a>
        </Link>
      ))}
    </div>
  );
};

export default Recipes;
