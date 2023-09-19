import Layout, { siteTitle, name } from "../components/layout";
import Image from "next/image";
import Link from "next/link";

const description = "Caio's resume.";
const titleSuffix = "Resume";

export default function Home() {
  return (
    <Layout description={description} titleSuffix={titleSuffix}>
      <h2 className="text-4xl font-bold mb-3">Resume</h2>
      <p>
        Pedding <a href="/" className="underline">
          PDF Version
        </a>.
      </p>
      <div className="max-w-xl">
        <Image
          src="/V.jpg"
          alt={name}
          width="1133"
          height="1751"
          className="rounded-sm"
          layout="responsive"
          quality={100}
        />
      </div>
    </Layout>
  );
}
