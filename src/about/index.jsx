import Card from "../veiw/card";
import GithubLink from "../veiw/github-link";
import nicePicITook from '../../public/nicepictureItook.png'

import styles from "./styles.module.css";

export default function About() {
    return (
        <>
            <div className={styles.cardContainer}>
                <Card
                    title="Thanks for your interest!"
                    subtitle="This is just a fun website to show my abilities in Nextjs, React and Javascript!"
                    img={{
                        src: nicePicITook,
                        alt: "A lot of sushi with wasabi and ginger",
                        height: 2826,
                        width: 2985,
                    }}
                />
            </div>
            <GithubLink />
        </>
    )
}