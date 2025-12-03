import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "./api";
import { useNavigate, Link } from "react-router-dom";

export default function NewUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      alert("User Created Successfully!");
      navigate("/");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name, email });
  };

  return (
    <div>
      <Link to="/">⬅ Back</Link>
      <h2>Add New User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />{" "}
        <br /><br />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />{" "}
        <br /><br />

        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Creating..." : "Add User"}
        </button>
      </form>

      {mutation.isError && <p style={{color:"red"}}>Error creating user</p>}
    </div>
  );
}
