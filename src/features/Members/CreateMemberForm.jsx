import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useCreateMember } from "./useCreateMember";
import Select from "../../ui/Select";
import { useUniversities } from "./useUniversities";
import { useState } from "react";

function CreateMemberForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const [selectedState, setSelectedState] = useState("0");
  const { errors } = formState;
  const { isCreating, addMember } = useCreateMember();

  const { isLoadingUniversities, universities } =
    useUniversities(selectedState);

  function onSubmit(data) {
    console.log(data);
    addMember({ ...data }, { onSuccess: () => reset() });
  }

  function handleChangeState(e) {
    setSelectedState(e.target.value);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Member name" error={errors?.name?.message}>
        <Input
          autoComplete="off"
          type="text"
          id="name"
          disabled={isCreating}
          placeholder="Member name"
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Gender" error={errors?.gender?.message}>
        <Select
          id="gender"
          options={[
            { value: "0", label: "Select a gender" },
            { value: "MALE", label: "Male" },
            { value: "FEMALE", label: "Female" },
          ]}
          {...register("gender", {
            validate: (value) => value !== "0" || "Please Select a gender",
          })}
        />
      </FormRow>
      <FormRow label="State" error={errors?.state?.message}>
        <Select
          id="state"
          onHandle={handleChangeState}
          options={[
            { value: "0", label: "Select a State" },
            { value: "sfax", label: "Sfax" },
            { value: "sousse", label: "Sousse" },
          ]}
          {...register("state", {
            validate: (value) => value !== "0" || "Please Select a State",
          })}
        />
      </FormRow>
      <FormRow label="University" error={errors?.university_name?.message}>
        <Select
          id="university_name"
          disabled={selectedState === "0"}
          options={[
            { value: "0", label: "Select a University" },
            ...(universities
              ? universities.map((university) => ({
                  value: university.shortName,
                  label: university.shortName,
                }))
              : []),
          ]}
          {...register("university_name", {
            validate: (value) => value !== "0" || "Please Select a University",
          })}
        />
      </FormRow>

      <FormRow label="Role" error={errors?.role?.message}>
        <Select
          id="Role"
          options={[
            { value: "0", label: "Select a Role" },
            { value: "MEMBER", label: "Member" },
            { value: "PRESIDENT", label: "President" },
          ]}
          {...register("role", {
            validate: (value) => value !== "0" || "Please Select Role",
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
