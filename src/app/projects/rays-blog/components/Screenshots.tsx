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
    src: "/projects/rays-blog/main_page.png",
    alt: "Main page of the ray's blog website",
    description: "Main page ",
  },
  {
    src: "/projects/rays-blog/main_page_light.png",
    alt: "Main page of the ray's blog website",
    description: "Main page with light theme",
  },
  {
    src: "/projects/rays-blog/article_gallery.png",
    alt: "Articles page of the ray's blog website",
    description: "Articles page with sorting and querying options",
  },
  {
    src: "/projects/rays-blog/article_page.png",
    alt: "Article page of the ray's blog website",
    description: "Article page",
  },
  {
    src: "/projects/rays-blog/article_page_2.png",
    alt: "Article page of the ray's blog website",
    description: "Article page with markdown content",
  },
  {
    src: "/projects/rays-blog/article_footer.png",
    alt: "Article page of the ray's blog website",
    description: "Fully working category and tag querying",
  },
  {
    src: "/projects/rays-blog/article_creation.png",
    alt: "Article creation page of the ray's blog website",
    description: "Article Creation page",
  },
  {
    src: "/projects/rays-blog/article_creation_2.png",
    alt: "Article creation page of the ray's blog website",
    description: "Article Creation page with DIY markdown editor and preview",
  },
  {
    src: "/projects/rays-blog/article_creation_3.png",
    alt: "Article creation page of the ray's blog website",
    description: "Article Creation page with local draft and clean functions",
  },
  {
    src: "/projects/rays-blog/image_gallery.png",
    alt: "Image gallery page of the ray's blog website",
    description: "Image Gallery to upload and use images in the articles",
  },
];

const responsiveDesignExamples = [
  {
    src: "/projects/rays-blog/main_page_responsive.jpg",
    alt: "Main page of the ray's blog website on mobile",
    description: "Main page on mobile",
  },
  {
    src: "/projects/rays-blog/menu_mobile.jpg",
    alt: "Menu of the ray's blog website on mobile",
    description: "Navigation menu on mobile",
  },
  {
    src: "/projects/rays-blog/article_gallery_responsive.jpg",
    alt: "Articles page of the ray's blog website on mobile",
    description: "Articles page on mobile",
  },
  {
    src: "/projects/rays-blog/article_page_responsive.jpg",
    alt: "Article page of the ray's blog website on mobile",
    description: "Article page on mobile",
  },
];
