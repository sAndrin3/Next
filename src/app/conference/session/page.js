import Link from "next/link"; 

export default function Page(){
    return (
     <>
       <h1>Welcome to session </h1>
       <h2>
        <Link href="/conference">Back to Conference</Link>
       </h2>
     </>
    );
   }