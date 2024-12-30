import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Row>
      <Heading>Page Not Found</Heading>
      <div className="flex items-center justify-center py-6 overflow-hidden font-semibold text-white bg-gray-700 border-gray-400 rounded-md">
        <Row type="horizontal">
          Page Not Found
          <Button
            onClick={() => navigate(-1)}
            $variation="primary"
            size="medium"
          >
            &larr; Back{" "}
          </Button>
        </Row>
      </div>
    </Row>
  );
}

export default PageNotFound;
