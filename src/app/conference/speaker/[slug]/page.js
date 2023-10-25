
import styles from "../../conference.module.css";

async function fetchSpeakerInfo(name) {
    // fetch data
    const data = await fetch(
        "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json",
        {next: {revalidate: 20}}
      );
    
    //   parse to json
    const speakerJson = await data.json();

    // get the speaker with the passed name
    return speakerJson['speakers']?.find(
        (speaker) => speaker['name'] == name.split('%20').join(' '),
    );
}

export default async function Page({params}) {

    const speakerInfo = await fetchSpeakerInfo(params.slug);
    
    const {name, bio, sessions} = speakerInfo;

    return (
        <div className={styles.infoContainer}>
            <h3 className={styles.titleText}>{name}</h3>
            <h5 className={styles.descText}>About: {bio}</h5>
            {sessions &&
                sessions.map(({name, id}) => (
                    <div key={id}>
                        <h5 className={styles.descText}>Session: {name}</h5>
                    </div>
                ))}
           
        </div>
    )
}