import { ExperienceSetion } from "./components/ExperienceSection"
import { FinanceSection } from "./components/FinanceSection"
import { FourCardSection } from "./components/FourCardSection"
import { MainCard } from "./components/MainCard"
import { SeamlessSection } from "./components/SeamlessSection"
import { SocSection } from "./components/SocSection"
import { Trusted } from "./components/Trusted"
import { Video } from "./components/Video"

function App() {

  return (
    <>
      <div >
        <MainCard />
        <Trusted />
        <Video />
        <FourCardSection />
        <SeamlessSection />
        <SocSection />
        <FinanceSection />
        <ExperienceSetion />
      </div>
    </>
  )
}

export default App
