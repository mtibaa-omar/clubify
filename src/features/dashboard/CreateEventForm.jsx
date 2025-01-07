import { useForm, Controller, useFieldArray } from "react-hook-form";
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
import { FiMinusCircle } from "react-icons/fi";
import { useMembersEvent } from "../Members/useMembersEvent";

function CreateEventForm({ eventToEdit = {}, type }) {
  const { isCreating, addEvent } = useCreateEvent();
  const { isUpdating, updateEvent } = useUpdateEvent();
  const isSubmitting = isCreating || isUpdating;
  const isViewing = type === "view";

  const {
    id: editId,
    state: editState,
    university_name: editUniversity,
    tasks: editTasks = [],
    ...editValues
  } = eventToEdit;

  const [selectedState, setSelectedState] = useState(editState || "0");
  const { isLoadingUniversities, universities } =
    useUniversities(selectedState);

  const parsedTasks = (editTasks || [])
    .filter((task) => task && task.trim() !== "")
    .map((task) => {
      try {
        return typeof task === "string" ? JSON.parse(task) : task;
      } catch {
        return { task: "", member: "0" };
      }
    });

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    control,
    reset,
  } = useForm({
    defaultValues: {
      ...editValues,
      tasks: parsedTasks.length ? parsedTasks : [],
    },
  });

  const { isLoading, members } = useMembersEvent(
    getValues().university_name || editUniversity || "0"
  );

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tasks",
  });

  useEffect(() => {
    if (selectedState === "0") {
      setValue("university_name", "0");
      remove();
    } else if (universities?.length > 0 && editUniversity) {
      setValue("state", editState);
      setValue("university_name", editUniversity);
    }
  }, [
    selectedState,
    setValue,
    editUniversity,
    editState,
    universities,
    remove,
  ]);
  const onSubmit = (data) => {
    const finalData = {
      ...data,
      tasks: data.tasks
        .filter((task) => task.task.trim() !== "" && task.member !== "0") // Remove empty tasks
        .map((task) => JSON.stringify(task)),
    };

    if (Object.keys(eventToEdit).length) {
      updateEvent({ id: editId, newEvent: finalData });
    } else {
      addEvent(finalData, {
        onSuccess: () => {
          reset();
          remove();
        },
      });
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Event name" error={errors?.eventName?.message}>
        <Input
          autoComplete="off"
          type="text"
          id="eventName"
          disabled={isSubmitting || isViewing}
          placeholder="Event name"
          {...register("eventName", { required: "This field is required" })}
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
            { value: "monastir", label: "Monastir" },
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
            selectedState === "0" ||
            isSubmitting ||
            isLoadingUniversities ||
            isViewing
          }
          options={[
            { value: "0", label: "Select a University" },
            ...(universities?.map((university) => ({
              value: university.shortName,
              label: university.shortName,
            })) || []),
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
                  "& .Mui-disabled": { cursor: "not-allowed", color: "white" },
                }}
                label="Start Date"
                value={value ? dayjs(value) : null}
                onChange={(date) => onChange(date ? date.toISOString() : null)}
                disabled={isViewing}
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
            rules={{
              required: "End Date is required",
              validate: (value) =>
                !value ||
                dayjs(value).isAfter(getValues("startDate")) ||
                "End Date must be after Start Date",
            }}
            render={({ field: { onChange, value } }) => (
              <DateTimePicker
                className="datepicker"
                sx={{
                  width: "280px",
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiInputBase-input": { color: "white" },
                  "& .Mui-disabled": { cursor: "not-allowed", color: "white" },
                }}
                label="End Date"
                value={value ? dayjs(value) : null}
                onChange={(date) => onChange(date ? date.toISOString() : null)}
                disabled={isViewing}
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
          disabled={isSubmitting || isViewing}
          placeholder="Event location"
          {...register("location", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Input
          autoComplete="off"
          type="text"
          id="description"
          disabled={isSubmitting || isViewing}
          placeholder="Event description"
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Sponsor" error={errors?.poweredBy?.message}>
        <Input
          autoComplete="off"
          type="text"
          id="poweredBy"
          disabled={isSubmitting || isViewing}
          placeholder="Sponsor Not Required"
          {...register("poweredBy")}
        />
      </FormRow>

      {!fields.length ? (
        <div className="text-sm text-gray-500">
          No tasks available. Add a task to proceed.
        </div>
      ) : (
        fields.map((field, index) => (
          <FormRow key={field.id} label={`Task ${index + 1}`}>
            <div className="flex items-center justify-between gap-4">
              <Input
                placeholder={`Task ${index + 1}`}
                {...register(`tasks.${index}.task`, {
                  required: `Task ${index + 1} is required`,
                })}
                disabled={isSubmitting || isViewing}
              />
              {errors?.tasks?.[index]?.task && (
                <span className="text-sm text-red-500">
                  {errors.tasks[index].task.message}
                </span>
              )}
              {!isViewing && (
                <FiMinusCircle
                  size={30}
                  className="text-red-500 hover:text-red-600 hover:cursor-pointer"
                  onClick={() => remove(index)}
                />
              )}
            </div>
            <Select
              id={`tasks.${index}.member`}
              disabled={isLoading || isViewing}
              options={[
                { value: "0", label: "Select a Member" },
                ...(members || []).map((member) => ({
                  value: member.id,
                  label: member.name,
                })),
              ]}
              {...register(`tasks.${index}.member`, {
                validate: (value) => value !== "0" || "Please select a member",
              })}
            />
            {errors?.tasks?.[index]?.member && (
              <span className="text-sm text-red-500">
                {errors.tasks[index].member.message}
              </span>
            )}
          </FormRow>
        ))
      )}

      {!isViewing && (
        <FormRow>
          <Button
            type="button"
            onClick={() => {
              if (getValues("university_name") === "0") return;
              append({ task: "", member: "0" });
            }}
            disabled={isSubmitting}
          >
            Add Task
          </Button>
        </FormRow>
      )}

      {!isViewing && (
        <FormRow>
          <Button disabled={isSubmitting} type="submit">
            {Object.keys(eventToEdit).length === 0 ? "Create" : "Update"}
          </Button>
        </FormRow>
      )}
    </Form>
  );
}

export default CreateEventForm;
