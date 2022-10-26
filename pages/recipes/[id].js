export const getStaticPaths = async () => {
  
    // const options = {
    //     method: "GET",
    //     headers: {
    //       "X-RapidAPI-Key": "cac0ff8c40msh8d6b13eceeb7d54p149d44jsn09a410dae8d1",
    //       "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
    //     },
    //   };
    //   const res = await fetch(
    //     "https://edamam-recipe-search.p.rapidapi.com/search?q=chicken",
    //     options
    //   );
    //   const data = await res.json();
    //   console.log(data);

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    const data = await res.json();

const paths = data.map(coment=> {
return {
        params: {id: coment.id.toString() }
    }
})

return { 
    paths,
    fallback: false
    
}
}

export const getStaticProps = async (context) => {
    const id = context.params.id
//     const options = {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key": "cac0ff8c40msh8d6b13eceeb7d54p149d44jsn09a410dae8d1",
//           "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
//         },
//       };
//   const res = await fetch("https://edamam-recipe-search.p.rapidapi.com/search=?q=chicken" + label ,options);
//   const data = await res.json();
const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments/' + id )
const data = await res.json();

  return {
    props: { per: data },
  };
}

const Details = ({per}) => {
    return (  
        <div>
            <h1 style={{color: "red"}}>{per.id}</h1>
            <h1>{per.name}</h1>
        </div>
    );
}
 
export default Details;