import Image from "next/image";

type TechStackImageProps = {
  src: string;
  alt: string;
  link: string;
  bg?: boolean;
};

export default function TechStackImage({
  src,
  alt,
  bg,
  link,
}: TechStackImageProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image
        className={`self-center ${
          bg ? "bg-white p-3 rounded-lg" : ""
        } size-[60px] md:size-[90px] lg:size-[120px] object-scale-down`}
        src={src}
        alt={alt}
        width={120}
        height={120}
      />
    </a>
  );
}
