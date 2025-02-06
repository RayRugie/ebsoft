// components/ClientTypes/ClientTypes.tsx
import styles from './ClientTypes.module.scss';

export const ClientTypes = () => (
  <section className={styles.clientTypes}>
    
    <h2>We deal with clients of any size and industry</h2>
    
    <div className={styles.columns}>
      <div className={styles.firstColumn}>
      <div className={styles.column}>
        <h3>Individuals & Startups</h3>
        <p>We use technology, smart electronics, logistics, and mobile devices to create a wide range of services...</p>
      </div>

      </div>
      
      <div className={styles.column}>
        <h3>Enterprises & Governments</h3>
        <p>We offer various customers for their customers, such as the United States, the US, and the United States...</p>
      </div>
    </div>
  </section>
);