import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useSignup } from "./useSignup";

function SignupForm() {
  const { register, handleSubmit, formState, reset, getValues } = useForm();
  const { errors } = formState;
  const { isPending, signup } = useSignup();
  function onSubmit({ fullName, email, password }) {
    signup({ fullName, email, password }, { onSettled: () => reset() });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full Name" error={errors?.fullName?.message}>
        <Input
          id="fullName"
          autoComplete="off"
          {...register("fullName", { required: "This Field is required" })}
        />
      </FormRow>
      <FormRow label="email" error={errors?.email?.message}>
        <Input
          id="email"
          autoComplete="off"
          {...register("email", {
            required: "This Field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email adress",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          id="password"
          autoComplete="current-password"
          type="password"
          {...register("password", {
            required: "This Field is required",
            minLength: {
              value: 8,
              message: "password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm Password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          id="passwordConfirm"
          autoComplete="current-password"
          type="password"
          {...register("passwordConfirm", {
            required: "This Field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>
      <FormRow>
        <Button
          onClick={reset}
          type="reset"
          $variation="secondary"
          size="medium"
        >
          Cancel
        </Button>
        <Button size="medium" disabled={isPending}>
          Submit
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
