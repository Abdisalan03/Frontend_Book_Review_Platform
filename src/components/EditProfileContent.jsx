import React, { useEffect, useRef, useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Avatar } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  useGetUserQuery,
  useUpdateUserMutation
} from "../Store/api/UserSlice";

function EditProfileContent() {
  const { data: user = {} } = useGetUserQuery();
  console.log("user:", user);
  const [editUser] = useUpdateUserMutation();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      name: user.name,
      email: user.email,
      image: user.image
    },

    validate: {
      name: (value) => !value.trim() && "Invalid name",
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
      image: (value) => {
        // You can add custom validation for the image URL if needed
        // For now, assuming any string is a valid URL
        return /^(ftp|http|https):\/\/[^ "]+$/.test(value)
          ? null
          : "Invalid URL";
      }
    }
  });

  const handleSubmit = async () => {
    const { hasErrors } = form.validate();

    if (!hasErrors) {
      try {
        const result = await editUser(form.values).unwrap();
        toast.success(result.message);
        navigate("/");
      } catch (error) {
        if (error && error.data) {
          toast.error(error.data.message);
        } else {
          console.error("An unexpected error occurred:", error);
        }
      }
    }
  };

  return (
    <div className="w-full md:w-2/4 xl:w-1/3 p-6 sm:p-8 rounded-lg flex flex-col shadow-[0px_0px_6px_rgb(0,0,0,0.1)]">
      <h2 className="text-3xl font-medium text-center">Edit Profile</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextInput
          withAsterisk
          label="Name"
          mt="md"
          size="md"
          placeholder="Enter your name"
          {...form.getInputProps("name")}
        />
        <TextInput
          withAsterisk
          mt="md"
          size="md"
          label="Email"
          placeholder="Enter your email"
          {...form.getInputProps("email")}
        />
        <TextInput
          mt="md"
          size="md"
          label="Image URL"
          placeholder="Enter your image URL"
          {...form.getInputProps("image")}
        />
        <button className="mt-6 w-full bg-primaryColor bg-opacity-90 hover:bg-opacity-100 px-4 py-3 text-sm flex items-center justify-center rounded-xl text-white duration-100 ">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditProfileContent;
