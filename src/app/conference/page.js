import Image from "next/image";
import Link from "next/link";
import Conference from "../../images/media-image-1.jpg";
import styles from "./conference.module.css"

export default function Page(){
    return (
     <>
     <div className={styles.bgWrap}>
        <Image
          src={Conference}
          alt="Conference pic"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          fill
          styles={{
            objectFit: "cover",
          }}
        />
     </div>
     <h1 className={styles.bgHeader}>Welcome to THE Jitu Conference</h1>
      <h2 className={styles.bgText}>
        <Link className={styles.bgLinks} href="/conference/speaker">
          View Speakers
        </Link>
      </h2>
      <h2 className={styles.bgText}>
        <Link className={styles.bgLinks} href="/conference/session">
          View Sessions
        </Link>
      </h2>
     </>
    );
   }