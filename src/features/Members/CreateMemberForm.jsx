import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useCreateMember } from "./useCreateMember";
import { toast } from "react-toastify";
import Select from "../../ui/Select";

function CreateMemberForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { isCreating, addMember } = useCreateMember();
  function onSubmit(data) {
    console.log(data);
    console.log(errors);
    addMember({ newCabin: { ...data } });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Member name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          placeholder="Member name"
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Gender" error={errors?.gender?.message}>
        <Select
          options={[
            { value: "0", label: "Select a gender" },
            { value: "male", label: "male" },
            { value: "female", label: "female" },
          ]}
          {...register("gender", {
            validate: (value) => value !== "0" || "Please select a gender",
          })}
        />
      </FormRow>
      <FormRow label="State" error={errors?.state?.message}>
        <Select
          options={[
            { value: "0", label: "Select a State" },
            { value: "sfax", label: "Sfax" },
            { value: "sousse", label: "Sousse" },
          ]}
          {...register("state", {
            validate: (value) => value !== "0" || "Please select a State",
          })}
        />
      </FormRow>
      <FormRow>
        <Button disabled={isCreating}>Submit</Button>
      </FormRow>
    </Form>
  );
}

export default CreateMemberForm;
