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

    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json();
    console.log(data)

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
  //   const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key": "cac0ff8c40msh8d6b13eceeb7d54p149d44jsn09a410dae8d1",
  //         "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
  //       },
  //     };
  // const res = await fetch("https://edamam-recipe-search.p.rapidapi.com/search=?q=chicken" + label ,options);
  // const data = await res.json();
const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
const data = await res.json();
// console.log(data)
  return {
    props: { per: data },
  };
}

const Details = ({per}) => {
    return (  
        <div>
        
            <div>
                <h1>{per.title}</h1>
                <h1>{per.completed}</h1>
            </div>
      
        </div>
    );
}
 
export default Details;