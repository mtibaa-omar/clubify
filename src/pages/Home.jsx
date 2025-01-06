import Sos from "../features/home/Sos";
import Footer from "../ui/Footer";
import Row from "../ui/Row";

function Home() {
  return (
    <Row type="vertical">
      <img src="map2.png" className="sm:hidden" />
      <img src="map.png" className="hidden sm:block  sm:mx-auto w-[800px]" />

      <Sos />
      <img src="quote.png" className="rounded-md w-80 sm:w-96 sm:mx-auto" />
      <Footer />
    </Row>
  );
}

export default Home;
