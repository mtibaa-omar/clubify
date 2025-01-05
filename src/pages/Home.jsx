import Sos from "../features/home/Sos";
import Row from "../ui/Row";

function Home() {
  return (
    <Row type="vertical">
      <div className="font-sans text-4xl font-bold text-blue-500">
        <div>SOS Club</div>
      </div>
      <Sos />
    </Row>
  );
}

export default Home;
