"use client";

import { useForm } from "react-hook-form";

export default function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Signup Successful!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
          className="border p-2 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="border p-2 rounded"
        />

        <button className="bg-black text-white p-2 rounded">
          Sign Up
        </button>

      </form>
    </div>
  );
}