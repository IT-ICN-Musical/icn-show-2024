import Navbar from "./components/Navbar";
import Synopsis from "./components/Synopsis";
import Tickets from "./components/Tickets";
import Footer from "./(components)/footer";
import Loading from "./(components)/loading";

export default function Home() {
  return (
    <main>
      <Loading interval={2000} />
      <Navbar />
      <Tickets />
      <Synopsis />
      <Footer />
    </main>
  );
}
