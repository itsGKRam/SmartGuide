const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  // check if db is connected

  await db.$connect();

  if (db.$connect) {
    console.log("Connected to database");
  }
  try {
    const categories = [
      { name: "Famous People" },
      { name: "Movies & TV" },
      { name: "Musicians" },
      { name: "Games" },
      { name: "Animals" },
      { name: "Philosophy" },
      { name: "Scientists" },
    ];

    await db.category.createMany({
      data: categories,
    });

    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error seeding default categories ", error);
  }
  await db.$disconnect();
}

main();
