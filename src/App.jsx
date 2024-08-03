import { FourCardSection } from "./components/FourCardSection"
import { MainCard } from "./components/MainCard"
import { SeamlessSection } from "./components/SeamlessSection"
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
      </div>
    </>
  )
}

export default App
