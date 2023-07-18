import Layout from "../components/layout";

const description =
  "Caio Camatta Coelho's personal website, portfolio, and resume.";
const titleSuffix = "About";

export default function Home() {
  return (
    <Layout description={description} titleSuffix={titleSuffix}>
      <h2 className="text-4xl font-bold mb-3">About Me</h2>
      <h3 className="text-xl text-gray-700 font-medium mt-3 mb-1 pt-1">
        Projects
      </h3>
      <ul className="list-disc list-inside ml-3 mt-2 text-black-900">
        <li className="mt-2">
          Java project  for saving files in the cloud, using Dcoker-compose to deploy after build the docker image.{" "}
          <a href="https://github.com/hkvincent/mydisk" className="text-blue-600">
            Cloud Base Disk (GitHub Repo)
          </a>
          .
        </li>
        <li className="mt-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.vincent.vpedometer"
            className="text-blue-600"
          >
            pedometer App
          </a>{" "}
          (2018): This app motivates users to walk more and level up their in-app character. 
                  It also allows them to participate in battles with other users, view rankings.{" "}
          <a
            href="https://github.com/hkvincent/vpeodometer"
            className="text-blue-600"
          >
            GitHub Repo
          </a>
          .
        </li>
        <li className="mt-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.vincent.im"
            className="text-blue-600"
          >
            Chat App
          </a>{" "}
          (2017): This app is designed for chatting with other users and its backend uses services similar to Firebase.{" "}
        </li>
        <li className="mt-2">
          <a href="https://vmdb-pink.vercel.app/" className="text-blue-600">
            the IMDB clone
          </a>{" "}
          (2023): The website was created using NextJS version 13 (App Route).{" "}
          <a
            href="https://github.com/hkvincent/vmdb"
            className="text-blue-600"
          >
            Github Rep
          </a>{" "}
        </li>

      </ul>

      <h3 className="text-xl text-gray-700 font-medium mt-5 mb-1 pt-2">
        GitHub
      </h3>
      <ul className="list-disc list-inside ml-3 mt-2">
        <li className="mt-2">
          <a
            href="https://github.com/hkvincent"
            className="text-blue-600"
          >
            Vincent's Github
          </a>{" "}
          Check out Vincent's Github for more information.
        </li>
      </ul>
    </Layout>
  );
}
