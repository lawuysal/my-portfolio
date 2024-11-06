export default function Features() {
  return (
    <section
      id="features"
      className="w-[22rem] md:w-[50rem] text-lg text-wrap border  rounded-md"
    >
      <h4 className="border-b p-3 bg-primary/10">Features</h4>
      <div className="p-4 flex flex-col justify-center gap-4">
        <ul className="list-disc list-inside space-y-3">
          <li>Server and database deployed on Azure</li>
          <li>Client deployed on Vercel</li>
          <li>Admin authentication with JWT</li>
          <li>Markdown support</li>
          <li>Image uploading for blog posts</li>
          <li>Post querying with tags and categories</li>
          <li>Post and image sorting</li>
          <li>Fully responsive design</li>
          <li>Dark and light themes</li>
          <li>Toast updates</li>
        </ul>
      </div>
    </section>
  );
}
