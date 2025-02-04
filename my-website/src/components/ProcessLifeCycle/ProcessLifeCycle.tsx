// components/ProcessLifeCycle/ProcessLifeCycle.tsx
import styles from './ProcessLifeCycle.module.scss';

export const ProcessLifeCycle = () => (
  <section className={styles.process}>
    <h2>Our Process Life Cycle</h2>
    <h3>Visualize. Design. Build. Deliver.</h3>

    <div className={styles.grid}>
      {[1, 2, 4, 5].map((num) => (
        <div key={num} className={styles.gridItem}>
          <div className={styles.number}>{num}</div>
          <h4>Technologies{num > 2 && ' Data Analytics'}</h4>
        </div>
      ))}
    </div>

    <div className={styles.servicesTable}>
      <div className={styles.row}>
        <div>Services</div>
        <div>Engagement Module</div>
        <div>Initiatives</div>
      </div>
      
      {[...Array(3)].map((_, i) => (
        <div key={i} className={styles.row}>
          <div>SPEAK SPIES</div>
          <div>Participant Service</div>
          <div>Direct/government</div>
        </div>
      ))}
    </div>
  </section>
);