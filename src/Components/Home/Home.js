
import styles from './Home.module.css'; // Import your CSS file for styling
import animation_styles from './Animations.module.css'
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import MoonAndStarsAnimation from '../ThreeScene/ThreeScene';
import ContactForm from '../ContactUs/ContactUs';
import './Home.css'

const Home = () => {
  const words = ['Games', 'Websites', 'Apps', 'APIs', 'Backend for game']; // Define your words here
  const speed = 50; // Speed in milliseconds for each character
  const delayBetweenWords = 2000; // Delay in milliseconds before switching to the next word

  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < words[wordIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText('');
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length); // Loop to the first word after the last word
      }, delayBetweenWords);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex]);

  return (
    <div className={styles.main}>
     
   
      <section className={`${styles.section_home_outer} ${styles.section}`} id="home">
      <MoonAndStarsAnimation/>
        <div className={styles.section_home_inner}>
          <div className={styles.intro_text}>
            <span>Hii,
              <br />
              my name is <span className={styles.myname}>Surendra Saini</span>
              <br />
              <span>I make </span>
              <span className={styles.myjob}>{currentText}</span>
            </span>
          </div>
          <div className={`${styles.profile_image} ${styles.center_children}`}>
            {/* <img src={process.env.PUBLIC_URL + "profile.jpg"} alt="profile" /> */}
          </div>
        </div>
        
      </section>
      <div className={styles.social_container}>
      <a href="https://github.com/surendra019"><i className="fab fa-github"></i></a>
      {/* <a href=""></a><i className="fab fa-instagram"></i> */}
      <a href="https://www.youtube.com/@gamewalabhai01"></a><i className="fab fa-youtube "></i>
      <a href="https://www.linkedin.com/in/surendra951/"></a><i className="fab fa-linkedin"></i>
      </div>
      <div className={animation_styles.quote_container}>
        <ContactForm/>
        {/* <div className={animation_styles.quote_container_inner}><span className={animation_styles.quote}></span></div> */}
      </div>

    </div>
  );
}

export default Home;
