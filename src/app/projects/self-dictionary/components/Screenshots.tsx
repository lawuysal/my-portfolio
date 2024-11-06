import Image from "next/image";

export default function Screenshots() {
  return (
    <section
      id="screenshots"
      className="w-[20rem] md:w-[50rem] gap-8 items-center justify-center  text-wrap flex flex-col rounded-md "
    >
      <h4 className="text-3xl font-semibold ">Screenshots</h4>

      <Image
        src="/projects/self-dictionary/language_notes.png"
        alt=""
        width={800}
        height={400}
      />
    </section>
  );
}