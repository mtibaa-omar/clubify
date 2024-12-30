import { useState } from "react";
import Button from "../../ui/Button";
import CreateMemberForm from "./CreateMemberForm";

function AddMember() {
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
          {!isOpen ? "Add New Members" : "Close Members"}
        </Button>
      </div>
      {isOpen && <CreateMemberForm />}
    </>
  );
}

export default AddMember;
