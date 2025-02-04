// components/Hero/Hero.tsx
import styles from './Hero.module.scss';
import Logo from "../../assets/logo.svg";
import Globe from "../../assets/globe-PHlLSXNydQ.svg";
// import Divider from "../../assets/div.herocircle__waves-wrapper.svg"

export const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.content}>
      {/* logo section */}
      <div className={styles.logoHead}>
        <img src={Logo} alt="Ebsoft" className={styles.logo}/>
        <button className={styles.contactButton}>
        Contact Us
      </button>
      </div>
      {/* Heading Section */}
      <div className={styles.headingGroup}>
        <h1 className={styles.mainHeading}>
          <span className={styles.visualize}>Visualize</span>
          <span className={styles.dotFirst}>.</span>
          <span className={styles.Design}>Design</span>
          <span className={styles.dotSecond}>.</span>
          <span>Build</span>
          <span className={styles.dot}>.</span>
          <span className={styles.Deliver}>Deliver</span>
        </h1>
        {/* subtext */}
        <p className={styles.subtext}>
          Embark on a transformative journey with us to shape your software landscape for the future. Guided by excellence and
          brilliance, we visualize, design, build, and deliver with precision.
        </p>
      </div>
        {/* main hero */}
      <div className={styles.gridContainer}>
        {/* left side */}
        <div className={styles.leftSide }>
          
            <div className={styles.textBreak1}>
              <p className={styles.firstPart}>WHO</p>
              <p className={styles.secondPart}>we are</p>
            </div>
         
            <div className={styles.textBreak2}>
              <p className={styles.firstPart}>WHAT</p>
              <p className={styles.secondPart}>we do</p>
            </div>
  

        </div>
        {/* center item  */}
        <div className={styles.centerItem}>
          <img src={Globe} alt="" className={styles.rotateGlobe}/>
        </div>
        {/* right side */}
        <div className="rightSide">
          <div className={styles.gridItem}>
            <span className={styles.smallLabel}>TELL US <br /> about the project</span>
          </div>

          <div className={styles.gridItem}>
            <div className={styles.dualText}>
              <span className={styles.mediumText}></span>
              <span className={styles.mediumText}>HOW <br/>we think</span>
            </div>
          </div>
        </div>

      </div>

      <button className={styles.hiringButton}>
        We are hiring
      </button>
    </div>
    <div className="wave"></div>

  </section>
);