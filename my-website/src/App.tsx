// App.tsx
import { Hero } from './components/Hero/Hero';
import { ClientTypes } from './components/ClientTypes/ClientTypes';
import { ProcessLifeCycle } from './components/ProcessLifeCycle/ProcessLifeCycle';

function App() {
  return (
    <>
      <Hero />
      <ClientTypes />
      <ProcessLifeCycle />
      
      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>We're hiring!</h2>
        <p>Our employees are responsible for developing new policies and practices.</p>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <h2>FAQ</h2>
        <ul>
          <li>
            <strong>What matters required?</strong>
            <ul>
              <li>What are those who do not work?</li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
}

export default App;