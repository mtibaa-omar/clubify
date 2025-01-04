import { useUser } from "../features/authentication/useUser";
import AddEvent from "../features/dashboard/AddEvent";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import Events from "../features/dashboard/Events";
import Stats from "../features/dashboard/Stats";
import Footer from "../ui/Footer";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  const { isAuthenticated } = useUser();
  return (
    <div className="max-w-[21rem] sm:max-w-full flex flex-col min-h-screen">
      <div className="flex-grow">
        <Row>
          <Row type="horizontal">
            <Heading>Dashboard</Heading>
            <DashboardFilter />
          </Row>
          <Stats />
          <Heading>Our Events</Heading>
          <Events />
          {isAuthenticated && <AddEvent />}
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
