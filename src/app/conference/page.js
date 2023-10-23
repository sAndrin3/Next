import Link from "next/link"; 

export default function Page(){
    return (
     <>
       <h1>Welcome to conference </h1>
       <h2>
        <Link href="/conference/speaker">Speakers</Link>
       </h2>
       <h2>
        <Link href="/conference/session">Sessions</Link>
       </h2>
     </>
    );
   }