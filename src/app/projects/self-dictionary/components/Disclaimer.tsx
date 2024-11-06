import React from "react";

export default function Disclaimer() {
  return (
    <section
      id="disclaimer"
      className="bg-muted w-[25rem] md:w-[50rem] text-wrap border-l-[16px] rounded-md py-4 pr-4 pl-8"
    >
      <span className="font-semibold mr-2">Disclaimer:</span> Database of this
      project has cold start due to Azure free tier on Azure SQL for now. You
      should wait for a minute to see the content.
    </section>
  );
}
