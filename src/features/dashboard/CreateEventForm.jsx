import { useForm, Controller } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useState } from "react";
import Select from "../../ui/Select";
import { useUniversities } from "../Members/useUniversities";
import { useCreateEvent } from "./useCreateEvent";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function CreateEventForm() {
  const [selectedState, setSelectedState] = useState("0");
  const { register, formState, handleSubmit, control, reset } = useForm();
  const { errors } = formState;

  const { isLoadingUniversities, universities } =
    useUniversities(selectedState);

  const { isCreating, addEvent } = useCreateEvent();
  function onSubmit(data) {
    addEvent(data, { onSuccess: () => reset() });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Event name" error={errors?.eventName?.message}>
        <Input
          autoComplete="off"
          type="text"
          id="eventName"
          disabled={isCreating}
          placeholder="Event name"
          {...register("eventName", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="State" error={errors?.state?.message}>
        <Select
          id="state"
          onHandle={(e) => setSelectedState(e.target.value)}
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
          disabled={isCreating}
          placeholder="Event location"
          {...register("location", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Description" error={errors?.description?.message}>
        <Input
          autoComplete="off"
          type="text"
          id="description"
          disabled={isCreating}
          placeholder="Event description"
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Sponsor" error={errors?.poweredBy?.message}>
        <Input
          autoComplete="off"
          type="text"
          id="poweredBy"
          disabled={isCreating}
          placeholder="sponsor"
          {...register("poweredBy", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow>
        <Button disabled={isCreating} type="submit">
          Create
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateEventForm;
