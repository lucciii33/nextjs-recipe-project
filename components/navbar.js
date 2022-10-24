import Link from "next/Link"
import Image from "next/image";

const Navbar = () => {
    return ( 
    <nav>
    <div className="logo">
        <Image src="/filter_4.png" width={40} height={40}/>
    </div>
    <Link href="/"><a>Home</a></Link>
    <Link href="/about"><a>About</a></Link>
    <Link href="/recipes/recipes"><a>Recipes</a></Link>
    </nav> 
    );
}
 
export default Navbar;