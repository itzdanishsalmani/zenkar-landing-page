import { ExperienceSetion } from "./components/ExperienceSection"
import { FinanceSection } from "./components/FinanceSection"
import { Footer } from "./components/Footer"
import { FourCardSection } from "./components/FourCardSection"
import { MainCard } from "./components/MainCard"
import { NavBar } from "./components/Others/NavBar"
import { SeamlessSection } from "./components/SeamlessSection"
import { SocSection } from "./components/SocSection"
import { Trusted } from "./components/Trusted"
import { VideoWithThreeCardSection } from "./components/VideoWithThreeCardSection"

function App() {

  return (
    <>
      <div >
        {/* <NavBar /> */}
        <MainCard />
        <Trusted />
        <VideoWithThreeCardSection />
        <FourCardSection />
        <SeamlessSection />
        <SocSection />
        <FinanceSection />
        <ExperienceSetion />
        <Footer />
      </div>
    </>
  )
}

export default App
