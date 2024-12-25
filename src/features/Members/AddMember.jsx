import { useState } from "react";
import Button from "../../ui/Button";
import Row from "../../ui/Row";
import CreateMemberForm from "./CreateMemberForm";

function AddMember() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="flex justify-center sm:justify-end">
        <Button onClick={handleClick}>
          {!isOpen ? "Add Members" : "Close Members"}
        </Button>
      </div>
      {isOpen && <CreateMemberForm />}
    </>
  );
}

export default AddMember;
