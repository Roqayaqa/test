import type { NextPage } from 'next';
import Navbar   from '../components/Header/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <header className="app-header">
        <div className="container">
          <Navbar/>
        </div>
      </header>
    </div>
  )
}

export default Home
