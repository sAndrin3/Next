import Image from "next/image";
import OurStoryPic from "../../images/home-image-1.jpg";
import styles from "./home.module.css"

export default function Page(){
    return (
     <>
     <div className={styles.bgWrap}>
        <Image
          src={OurStoryPic}
          alt="Our story pic"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          fill
          styles={{
            objectFit: "cover",
          }}
        />
     </div>
     <h1 className={styles.bgHeader}>Humble beginnings of our stories of life</h1>
     <p className={styles.bgText}> How we became Jitus in tech</p>
     </>
    );
   }