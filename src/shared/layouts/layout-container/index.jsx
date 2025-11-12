import Contact from "../../../features/contact";
import Login from "../../../features/log-in";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function ContainerLayout() {
  return (
        <>
      <div className="flex flex-col min-h-screen">
         
            <Header/>
          <main className="flex-1">
            <Login/>
             {/* <Contact/> */}
             {/* <LandingPage/> */}
          </main>
    
          {/* Footer */}
          <Footer/>
        </div>
        </>
  )
}
