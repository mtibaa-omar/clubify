import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useCreateMember } from "./useCreateMember";
import Select from "../../ui/Select";
import { useUniversities } from "./useUniversities";
import { useEffect, useState } from "react";
import { useRoleEnum } from "./useRoleEnum";
import Spinner from "../../ui/Spinner";

function CreateMemberForm({ memberToEdit = {} }) {
  // eslint-disable-next-line no-unused-vars
  const { id: editId, ...editValues } = memberToEdit;
  const { register, handleSubmit, formState, reset, setValue } = useForm({
    defaultValues: memberToEdit ? editValues : {},
  });
  const { data: roles, isLoading: isLoadingRoles } = useRoleEnum();

  const [selectedState, setSelectedState] = useState("0");
  const { errors } = formState;
  const { isCreating, addMember } = useCreateMember();

  const { isLoadingUniversities, universities } =
    useUniversities(selectedState);

  useEffect(() => {
    if (selectedState === "0") setValue("university_name", "0");
  }, [selectedState, setValue]);
  function onSubmit(data) {
    addMember(
      { ...data },
      {
        onSuccess: () => {
          reset();
          setSelectedState("0");
        },
      }
    );
  }

  function handleChangeState(e) {
    setSelectedState(e.target.value);
  }
  if (isLoadingRoles) return <Spinner />;
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
          disabled={isCreating}
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
          disabled={isCreating}
          options={[
            { value: "0", label: "Select a State" },
            { value: "sfax", label: "Sfax" },
            { value: "sousse", label: "Sousse" },
            { value: "kairouan", label: "Kairouan" },
            { value: "selliana", label: "Selliana" },
            { value: "tunis", label: "Tunis" },
          ]}
          {...register("state", {
            validate: (value) => value !== "0" || "Please Select a State",
          })}
        />
      </FormRow>
      <FormRow label="University" error={errors?.university_name?.message}>
        <Select
          id="university_name"
          disabled={
            selectedState === "0" || isCreating || isLoadingUniversities
          }
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
          disabled={isCreating}
          options={[
            { value: "0", label: "Select a Role" },
            ...roles.map((role) => ({
              value: role,
              label: role,
            })),
          ]}
          {...register("role", {
            validate: (value) => value !== "0" || "Please Select Role",
          })}
        />
      </FormRow>
      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email", {
            required: "This Field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email adress",
            },
          })}
          disabled={isCreating}
        />
      </FormRow>
      <FormRow>
        <Button disabled={isCreating} type="submit">
          Submit
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateMemberForm;
