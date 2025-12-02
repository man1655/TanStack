import React from "react";
import { useForm } from "@tanstack/react-form";

type RegisterFormValues = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  birthdate: string;
  isMarried: boolean;
  nationality: string;
  password: string;
  confirm_password: string;
};

export default function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    defaultValues: {
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      age: 0,
      birthdate: "",
      isMarried: false,
      nationality: "canada",
      password: "",
      confirm_password: "",
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted:", value);
      alert("Register Success!");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      style={{ display: "grid", gap: "10px", maxWidth: "350px" }}
    >
      {/* Username */}
      <form.Field
        name="username"
        children={(field) => (
          <input
            type="text"
            placeholder="Username"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      />

      {/* Email */}
      <form.Field
        name="email"
        children={(field) => (
          <input
            type="email"
            placeholder="Email"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      />

      {/* First Name */}
      <form.Field
        name="firstName"
        children={(field) => (
          <input
            type="text"
            placeholder="First Name"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      />

      {/* Last Name */}
      <form.Field
        name="lastName"
        children={(field) => (
          <input
            type="text"
            placeholder="Last Name"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      />

      {/* Age */}
      <form.Field
        name="age"
        children={(field) => (
          <input
            type="number"
            placeholder="Age"
            value={field.state.value}
            onChange={(e) => field.handleChange(Number(e.target.value))}
          />
        )}
      />

      {/* Birthdate */}
      <form.Field
        name="birthdate"
        children={(field) => (
          <input
            type="date"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      />

      {/* Married */}
      <form.Field
        name="isMarried"
        children={(field) => (
          <label>
            <input
              type="checkbox"
              checked={field.state.value}
              onChange={(e) => field.handleChange(e.target.checked)}
            />{" "}
            Married
          </label>
        )}
      />

      {/* Nationality */}
      <form.Field
        name="nationality"
        children={(field) => (
          <select
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          >
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            <option value="uk">United Kingdom</option>
          </select>
        )}
      />

      {/* Password */}
      <form.Field
        name="password"
        validators={{
          onChange: ({ value }) =>
            value.length < 6 ? "Min 6 characters" : undefined,
        }}
        children={(field) => (
          <>
            <input
              type="password"
              placeholder="Password"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.error && (
              <span style={{ color: "red" }}>{field.state.meta.error}</span>
            )}
          </>
        )}
      />

      {/* Confirm Password */}
      <form.Field
        name="confirm_password"
        validators={{
          onChange: ({ value }) =>
            value !== form.getFieldValue("password")
              ? "Passwords do not match"
              : undefined,
        }}
        children={(field) => (
          <>
            <input
              type="password"
              placeholder="Confirm Password"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.error && (
              <span style={{ color: "red" }}>{field.state.meta.error}</span>
            )}
          </>
        )}
      />

      <button type="submit" style={{ marginTop: "15px" }}>
        Register
      </button>
    </form>
  );
}
