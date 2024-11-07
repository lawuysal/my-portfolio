import Image from "next/image";

export default function Screenshots() {
  return (
    <section
      id="screenshots"
      className="w-[20rem] md:w-[50rem] gap-8 items-center justify-center text-lg text-wrap flex flex-col rounded-md "
    >
      <h4 className="text-3xl font-semibold">Screenshots</h4>
      <div className="flex flex-col gap-12">
        {screenshots.map((screenshot) => (
          <div
            key={screenshot.src + screenshot.description}
            className="flex flex-col gap-4 items-center justify-center"
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={800}
              height={400}
              layout="responsive"
              className="rounded-md md:rounded-lg border"
            />
            <p className="text-sm text-center">{screenshot.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const screenshots = [
  {
    src: "/projects/beat-stop/main_page.png",
    alt: "Main page of the beat stop website",
    description: "Main page",
  },
  {
    src: "/projects/beat-stop/query-page.png",
    alt: "Search beats page of the beat stop website",
    description: "Beat searching page",
  },
  {
    src: "/projects/beat-stop/buyer-beat-details.png",
    alt: "Beat details page of the beat stop website",
    description: "Beat details page for other users",
  },
  {
    src: "/projects/beat-stop/beat-details-w.png",
    alt: "Beat details page for beat owners of the beat stop website",
    description: "Beat details page for owners",
  },
  {
    src: "/projects/beat-stop/beat-details-wo.png",
    alt: "Beat details page for beat owners of the beat stop website",
    description: "Beat details page for owned by purchase users",
  },
  {
    src: "/projects/beat-stop/login.png",
    alt: "Login page of the beat stop website",
    description: "Login page",
  },
  {
    src: "/projects/beat-stop/signup.png",
    alt: "Signup page of the beat stop website",
    description: "Signup page",
  },
  {
    src: "/projects/beat-stop/profile.png",
    alt: "Profile page of the beat stop website",
    description: "Profile page of the users",
  },
  {
    src: "/projects/beat-stop/profile-edit.png",
    alt: "Profile editing page of the beat stop website",
    description: "Profile editing page",
  },
  {
    src: "/projects/beat-stop/user-beats.png",
    alt: "User's beats page of the beat stop website",
    description: "User's beats page",
  },
  {
    src: "/projects/beat-stop/beat-edit.png",
    alt: "Beat editing page of the beat stop website",
    description: "Beat editing page",
  },
  {
    src: "/projects/beat-stop/plans.png",
    alt: "Pricing page of the beat stop website",
    description: "Pricing page",
  },
  {
    src: "/projects/beat-stop/beat-buy.png",
    alt: "Purchase beat page of the beat stop website",
    description: "Beat purchase page",
  },
];
