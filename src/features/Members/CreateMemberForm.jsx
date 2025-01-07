import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useCreateMember } from "./useCreateMember";
import { useUpdateMember } from "./useUpdateMember";
import Select from "../../ui/Select";
import { useUniversities } from "./useUniversities";
import { useEffect, useState } from "react";
import { useRoleEnum } from "./useRoleEnum";
import Spinner from "../../ui/Spinner";

function CreateMemberForm({ memberToEdit = {}, type }) {
  const { isCreating, addMember } = useCreateMember();
  const { isUpdating, updateMember } = useUpdateMember();
  const isSubmitting = isCreating || isUpdating;
  const isViewing = type === "view";
  const {
    id: editId,
    state: editState,
    university_name: editUniversity,
    ...editValues
  } = memberToEdit;

  const { register, handleSubmit, formState, reset, setValue } = useForm({
    defaultValues: memberToEdit ? editValues : {},
  });

  const { data: roles, isLoading: isLoadingRoles } = useRoleEnum();
  const [selectedState, setSelectedState] = useState(editState || "0");
  const { errors } = formState;

  const { isLoadingUniversities, universities } =
    useUniversities(selectedState);
  useEffect(() => {
    if (selectedState === "0") setValue("university_name", "0");
    else if (memberToEdit && memberToEdit.university_name) {
      setValue("state", memberToEdit.state);
      setValue("university_name", memberToEdit.university_name);
    }
  }, [selectedState, setValue, memberToEdit]);

  function onSubmit(data) {
    if (Object.keys(memberToEdit).length !== 0) {
      updateMember({ id: editId, newMember: data });
    } else {
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
  }
  if (isLoadingRoles) return <Spinner />;
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Member name" error={errors?.name?.message}>
        <Input
          autoComplete="off"
          type="text"
          id="name"
          disabled={isSubmitting || isViewing}
          placeholder="Member name"
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Gender" error={errors?.gender?.message}>
        <Select
          id="gender"
          disabled={isSubmitting || isViewing}
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
          onHandle={(e) => setSelectedState(e.target.value)}
          disabled={isSubmitting || isViewing}
          options={[
            { value: "0", label: "Select a State" },
            { value: "sfax", label: "Sfax" },
            { value: "sousse", label: "Sousse" },
            { value: "monastir", label: "monastir" },
            { value: "mahdia", label: "Mahdia" },
            { value: "nabeul", label: "Nabeul" },
            { value: "kairouan", label: "Kairouan" },
            { value: "tunis", label: "Tunis" },
          ]}
          {...register("state", {
            validate: (value) => value !== "0" || "Please Select a State",
          })}
        />
      </FormRow>

      <FormRow label="Mandat" error={errors?.mandat?.message}>
        <Select
          id="mandat"
          options={[
            { value: "0", label: "Select Mandat" },
            { value: "2024-09-01", label: "2024-2025" },
            { value: "2025-09-01", label: "2025-2026" },
          ]}
          {...register("mandat", {
            required: "This Field is required",
          })}
          disabled={isSubmitting || isViewing}
        />
      </FormRow>

      <FormRow label="University" error={errors?.university_name?.message}>
        <Select
          id="university_name"
          defaultvalues={memberToEdit ? editUniversity : "0"}
          disabled={
            selectedState === "0" ||
            isSubmitting ||
            isLoadingUniversities ||
            isViewing
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
          disabled={isSubmitting || isViewing}
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

      <FormRow label="Department" error={errors?.department?.message}>
        <Select
          id="department"
          options={[
            { value: "0", label: "Select department" },
            { value: "ressourceHumaine", label: "ressource Humaine" },
            { value: "event", label: "event" },
            { value: "communication", label: "communication" },
          ]}
          {...register("department", {
            required: "This Field is required",
          })}
          disabled={isSubmitting || isViewing}
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
              message: "Please provide a valid email address",
            },
          })}
          disabled={isSubmitting || isViewing}
        />
      </FormRow>

      {!isViewing && (
        <FormRow>
          <Button disabled={isSubmitting} type="submit">
            {Object.keys(memberToEdit).length === 0 ? "Create" : "Update"}
          </Button>
        </FormRow>
      )}
    </Form>
  );
}

export default CreateMemberForm;
