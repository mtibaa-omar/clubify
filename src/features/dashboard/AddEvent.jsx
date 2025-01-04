import { useState } from "react";
import Button from "../../ui/Button";
import CreateEventForm from "./CreateEventForm";

function AddEvent() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="flex justify-center lg:justify-end">
        <Button
          $variation="primary"
          $size="medium"
          onClick={handleClick}
          type="submit"
        >
          {!isOpen ? "Add New Event" : "Close New Event"}
        </Button>
      </div>
      {isOpen && <CreateEventForm />}
    </>
  );
}

export default AddEvent;
