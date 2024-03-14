import db from "../modules/db";
import { faker } from "@faker-js/faker";
import { revalidatePath } from "next/cache";
import React from "react";
import TicketCard from "./(components)/TicketCard";

export default async function Home() {
  const posts = await db.post.findMany({ orderBy: { createdAt: "desc" } });

  const generatePosts = async () => {
    "use server";

    await db.post.createMany({
      data: [
        { content: faker.lorem.sentence() },
        { content: faker.lorem.sentence() },
        { content: faker.lorem.sentence() },
      ],
    });
    revalidatePath("/");
  };

  return (
    <div className="lg:grid grid-cols-2 xl:grid-cols-4">
      <TicketCard status="New" />
      <TicketCard status="New" />
      <TicketCard status="New" />
      <TicketCard status="New" />
    </div>
  );
}
