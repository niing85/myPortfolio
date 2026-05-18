import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contributions from './Pages/Contributions';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-stone-400">
      <Navbar />
      <main className="pt-20">
        <section id="home"><Home /></section>
        <section id="contributions"><Contributions /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;