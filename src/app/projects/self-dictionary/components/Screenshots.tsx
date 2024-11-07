import Image from "next/image";

export default function Screenshots() {
  return (
    <section
      id="screenshots"
      className="w-[20rem] md:w-[50rem] gap-8 items-center justify-center text-lg text-wrap flex flex-col rounded-md "
    >
      <h4 className="text-3xl font-semibold">Screenshots</h4>
      <div className="flex flex-col gap-12">
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-center justify-center"
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={800}
              height={400}
              className="rounded-md md:rounded-lg border"
            />
            <p className="text-sm text-center">{screenshot.description}</p>
          </div>
        ))}
        <p className="font-bold self-center">Responsive Design Examples</p>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center place-items-center gap-8">
          {responsiveDesignExamples.map((screenshot) => (
            <Image
              key={screenshot.src + screenshot.alt}
              src={screenshot.src}
              alt={screenshot.alt}
              width={200}
              height={100}
              className="rounded-md md:rounded-lg border"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const screenshots = [
  {
    src: "/projects/self-dictionary/login.png",
    alt: "Login page of the self dictionary website",
    description: "Login page",
  },
  {
    src: "/projects/self-dictionary/signup.png",
    alt: "Signup page of the self dictionary website",
    description: "Signup page",
  },
  {
    src: "/projects/self-dictionary/create-profile-page.png",
    alt: "Create profile page of the self dictionary website",
    description: "User must create a profile to use the website",
  },
  {
    src: "/projects/self-dictionary/my-languages-page.png",
    alt: "My languages page the self dictionary website",
    description: "My languages page",
  },
  {
    src: "/projects/self-dictionary/language-notes-page.png",
    alt: "Language notes page of the self dictionary website",
    description: "Language notes",
  },
  {
    src: "/projects/self-dictionary/language-notes-page-light.png",
    alt: "Language notes page the self dictionary website on light mode",
    description: "Language notes page on light theme",
  },
  {
    src: "/projects/self-dictionary/create-note-dialog.png",
    alt: "Create note dialog of the self dictionary website",
    description: "Create note dialog",
  },
  {
    src: "/projects/self-dictionary/edit-language-dialog.png",
    alt: "Edit language dialog of the self dictionary website",
    description: "Edit language dialog",
  },
];

const responsiveDesignExamples = [
  {
    src: "/projects/self-dictionary/mobile-menu.png",
    alt: "Navigation menu of the self-dictionary website on mobile",
    description: "Main page on mobile",
  },
  {
    src: "/projects/self-dictionary/mobile-languages-page.png",
    alt: "My languages page of the self-dictionary website on mobile",
    description: "My languages page on mobile",
  },
  {
    src: "/projects/self-dictionary/mobile-dashboard-page-menu.png",
    alt: "Dashboard page sidebar of the self-dictionary website on mobile",
    description: "Dashboard page sidebar on mobile",
  },
  {
    src: "/projects/self-dictionary/mobile-language-notes-page.png",
    alt: "Language notes page of the self-dictionary website on mobile",
    description: "Language notes page on mobile",
  },
];
