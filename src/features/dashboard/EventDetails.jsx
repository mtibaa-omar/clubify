import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../ui/Button";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import CreateEventForm from "./CreateEventForm";
import { useEvent } from "./useEvent";

function EventDetails() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const { event, isLoading } = useEvent();
  const navigate = useNavigate();
  if (isLoading) return <Spinner />;
  return (
    <Row>
      <CreateEventForm eventToEdit={event} type={type} />
      <Button onClick={() => navigate(-1)}> &larr; Back</Button>
    </Row>
  );
}

export default EventDetails;
