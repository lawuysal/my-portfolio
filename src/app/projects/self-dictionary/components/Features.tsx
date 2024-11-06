export default function Features() {
  return (
    <section
      id="features"
      className=" w-[22rem] md:w-[50rem]  text-wrap border  rounded-md"
    >
      <h4 className="border-b p-3 bg-primary/10 text-lg">Features (so far)</h4>
      <div className="p-4 flex flex-col justify-center  gap-4 mt-2">
        <ul className="list-disc list-inside space-y-3">
          <li>User authentication and authorization with JWT</li>
          <li>User login and signup</li>
          <li>Profile creation page</li>
          <li>Automatic browser language detection</li>
          <li>Protected routes</li>
          <li>Redirects</li>
          <li>Responsive Design</li>
          <li>Light and dark themes</li>
        </ul>
      </div>
    </section>
  );
}
