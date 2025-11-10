import './App.css'
import Hero from './components/Hero'
import LandingPage from './features/landing-page'
import './index.css'
import Footer from './shared/components/Footer'
import Header from './shared/components/Header'

function App() {
 
  return (
    <>

  <div className="flex flex-col min-h-screen">
      {/* Main content */}
        <Header/>
      <main className="flex-1">
         <LandingPage/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
    </>
  )
}

export default App
