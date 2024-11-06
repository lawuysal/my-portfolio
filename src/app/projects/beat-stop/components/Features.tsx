export default function Features() {
  return (
    <section
      id="features"
      className=" w-[22rem] md:w-[50rem]  text-wrap border  rounded-md"
    >
      <h4 className="border-b p-3 bg-primary/10 text-lg">Features</h4>
      <div className="p-4 flex flex-col justify-center gap-4 mt-2">
        <ul className="list-disc list-inside space-y-3">
          <li>User authentication and authorization with JWT</li>
          <li>User profiles</li>
          <li>File uploads including image and audio files</li>
          <li>File downloads</li>
          <li>Plans with monthly pricing</li>
          <li>Search functionality including beat titles and tags</li>
          <li>Music player to play tracks</li>
          <li>Interactive design</li>
        </ul>
      </div>
    </section>
  );
}
