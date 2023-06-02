
import { Outlet } from 'react-router-dom'
import MainNavBar from '../components/mainNavBar';
import Footer from '../components/Footer';
function Root() {
  return (
    <>
    <MainNavBar/>
      <main>
        <Outlet/>
      </main>
    <Footer/>
    </>
  )
}

export default Root
