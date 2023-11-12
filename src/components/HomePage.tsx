import { motion } from "framer-motion";
import { useState } from "react";

export default function HomePage() {
  return (
    <main className="mt-56 w-full max-md:mt-36">
      <div className="flex items-center justify-center flex-col gap-3 ml-8">
        <h1 className="font-bold tracking-wide text-2xl">
          InspireHub: Where Ideas Take Flight and Creativity Meets Opportunity!
        </h1>

        <p>
          Dive into a collaborative universe where your projects earn the
          spotlight and feedback fuels your next big leap
        </p>
      </div>
    </main>
  );
}
