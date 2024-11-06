import Image from "next/image";

export default function Screenshots() {
  return (
    <section id="screenshots">
      <Image
        src="/projects/beat-stop/main_page.png"
        alt=""
        width={800}
        height={400}
      />
    </section>
  );
}
