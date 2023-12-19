import React from "react";
import { Text, Title } from "@mantine/core";
import Addbook from "../components/AddBooks";

function AddBook() {
  return (
    <section className="py-[8rem]">
      <div className="container flex flex-col items-center justify-center">
        {/* Title */}
        <div className="my-4">
          <Title ta="center">Add Book</Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Add new Book details 
          </Text>
        </div>
        <Addbook />
      </div>
    </section>
  );
}

export default AddBook;