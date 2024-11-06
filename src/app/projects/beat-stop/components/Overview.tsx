export default function Overview() {
  return (
    <section
      id="overview"
      className="w-[22rem] md:w-[50rem] text-lg text-wrap border  rounded-md"
    >
      <h4 className="border-b p-3 bg-primary/10">Overview </h4>
      <div className="p-4 flex flex-col justify-center gap-4">
        <ul className="grid grid-cols-2 gap-4 ">
          {overviews.map((overview) => (
            <li key={overview.title + overview.value + "overviewSection"}>
              <div className="grid grid-cols-[2fr_1fr_8fr]">
                <p className="font-bold">{overview.title}</p>
                <p className="justify-self-end">:</p>
                <p className="ml-4">{overview.value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const overviews = [
  {
    title: "Status",
    value: "Finished",
  },
  {
    title: "Timeline",
    value: "Mar 2024 - June 2024",
  },
];
