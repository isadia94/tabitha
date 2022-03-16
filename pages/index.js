import Head from "next/head";
import About from "../components/About";
import Services from "../components/Services";
import Leadership from "../components/Leadership";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tabitha Alms Organization</title>
      </Head>

      {/* Component to Landing Page */}
      <Hero />

      {/* Component to About Page */}

      <About />

      {/* Component to Services Page */}
      <Services />

      {/* Component to Leading Page */}
      <Leadership />

      {/* Component to Footer Page */}
      <Footer />
    </div>
  );
}
