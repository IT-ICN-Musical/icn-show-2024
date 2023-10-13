import Navbar from './components/Navbar'
import Synopsis from './components/Synopsis'
import Tickets from './components/Tickets'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Tickets />
      <Synopsis />
    </main>
  )
}
