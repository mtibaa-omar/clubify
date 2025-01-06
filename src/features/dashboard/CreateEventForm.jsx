import { useForm, Controller } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useEffect, useState } from "react";
import Select from "../../ui/Select";
import { useUniversities } from "../Members/useUniversities";
import { useCreateEvent } from "./useCreateEvent";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useUpdateEvent } from "./useUpdateEvent";

function CreateEventForm({ eventToEdit = {} }) {
  const { isCreating, addEvent } = useCreateEvent();
  const { isUpdating, updateEvent } = useUpdateEvent();
  const isSubmitting = isCreating || isUpdating;

  const {
    id: editId,
    state: editState,
    university_name: editUniversity,
    ...editValues
  } = eventToEdit;

  const [selectedState, setSelectedState] = useState(editState || "0");
  const { isLoadingUniversities, universities } =
    useUniversities(selectedState);

  const { register, formState, handleSubmit, setValue, control, reset } =
    useForm({
      defaultValues: eventToEdit ? editValues : {},
    });
  const { errors } = formState;

  useEffect(() => {
    if (selectedState === "0") setValue("university_name", "0");
    else if (universities?.length > 0 && editUniversity) {
      setValue("state", editState);
      setValue("university_name", editUniversity);
    }
  }, [selectedState, setValue, editUniversity, editState, universities]);

  function onSubmit(data) {
    if (Object.keys(eventToEdit).length) {
      updateEvent({ id: editId, newEvent: data });
    } else {
      addEvent(data, { onSuccess: () => reset() });
    }
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Event name" error={errors?.eventName?.message}>
        <Input
          autoComplete="off"
          type="text"
          id="eventName"
          disabled={isSubmitting}
          placeholder="Event name"
          {...register("eventName", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="State" error={errors?.state?.message}>
        <Select
          id="state"
          onHandle={(e) => setSelectedState(e.target.value)}
          disabled={isSubmitting}
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
      <FormRow label="University" error={errors?.university_name?.message}>
        <Select
          id="university_name"
          disabled={
            selectedState === "0" || isSubmitting || isLoadingUniversities
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

      <FormRow label="Start Date" error={errors?.startDate?.message}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name="startDate"
            control={control}
            rules={{ required: "Start Date is required" }}
            render={({ field: { onChange, value } }) => (
              <DateTimePicker
                className="datepicker"
                sx={{
                  width: "280px",
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiInputBase-input": { color: "white" },
                }}
                label="Start Date"
                value={value ? dayjs(value) : null}
                onChange={(date) => onChange(date ? date.toISOString() : null)}
                textField={(params) => (
                  <Input
                    {...params}
                    id="startDate"
                    placeholder="Select a start date and time"
                    error={!!errors?.startDate}
                  />
                )}
              />
            )}
          />
        </LocalizationProvider>
      </FormRow>
      <FormRow label="End Date" error={errors?.endDate?.message}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name="endDate"
            control={control}
            rules={{ required: "Start Date is required" }}
            render={({ field: { onChange, value } }) => (
              <DateTimePicker
                className="datepicker"
                sx={{
                  width: "280px",
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiInputBase-input": { color: "white" },
                }}
                label="End Date"
                value={value ? dayjs(value) : null}
                onChange={(date) => onChange(date ? date.toISOString() : null)}
                textField={(params) => (
                  <Input
                    {...params}
                    id="endDate"
                    placeholder="Select an end date"
                    error={!!errors?.endDate}
                  />
                )}
              />
            )}
          />
        </LocalizationProvider>
      </FormRow>
      <FormRow label="Location" error={errors?.location?.message}>
        <Input
          autoComplete="off"
          type="text"
          id="location"
          disabled={isSubmitting}
          placeholder="Event location"
          {...register("location", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Description" error={errors?.description?.message}>
        <Input
          autoComplete="off"
          type="text"
          id="description"
          disabled={isSubmitting}
          placeholder="Event description"
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Sponsor" error={errors?.poweredBy?.message}>
        <Input
          autoComplete="off"
          type="text"
          id="poweredBy"
          disabled={isSubmitting}
          placeholder="Sponsor Not Required"
          {...register("poweredBy")}
        />
      </FormRow>

      <FormRow>
        <Button disabled={isSubmitting} type="submit">
          {Object.keys(eventToEdit).length === 0 ? "Create" : "Update"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateEventForm;
