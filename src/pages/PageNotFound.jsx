import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function PageNotFound() {
  return (
    <Row>
      <Heading>Page Not Found</Heading>
      <div className="flex items-center justify-center py-6 overflow-hidden text-3xl font-bold text-white bg-gray-400 border-gray-400 rounded-md">
        <Row type="horizontal">
          Page Not Found
          <Button>Back</Button>
        </Row>
      </div>
    </Row>
  );
}

export default PageNotFound;
