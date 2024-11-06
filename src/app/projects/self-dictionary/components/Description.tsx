export default function Description() {
  return (
    <section
      id="description"
      className="w-[22rem] md:w-[50rem]  text-wrap border  rounded-md"
    >
      <h4 className="border-b p-3 bg-primary/10 text-lg">Description</h4>
      <div className="p-4 flex flex-col justify-center gap-4 mt-2">
        <p>
          <strong className="font-bold">Self Dictionary</strong> is a web
          platform designed to support language learning and connect learners
          with each other.
        </p>
        <p>
          It allows users to keep and customize notes for each language and
          practice them through mini-games.
        </p>
        <p>Users can also interact with others on social feeds and forums.</p>
      </div>
    </section>
  );
}
