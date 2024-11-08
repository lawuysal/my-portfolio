export default function Description() {
  return (
    <section
      id="description"
      className="w-[22rem] md:w-[50rem]  text-wrap border  rounded-md"
    >
      <h4 className="border-b p-3 bg-primary/10 text-lg">Description</h4>
      <div className="p-4 flex flex-col justify-center gap-4 mt-2">
        <p>
          <strong>Ray&apos;s Blog</strong> is a dynamic individual blog website
          developed during my internship at <strong>Entegre Yazılım</strong>.
        </p>
        <p>
          Created for the music producer and mixing engineer Ray Maschine, the
          website is designed to be a personal blog where Ray can share his
          thoughts, experiences, and knowledge with his followers.
        </p>
      </div>
    </section>
  );
}
