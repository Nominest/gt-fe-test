import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="bg-gray-100 min-h-screen">
        <Header />
      </main>
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:4000/movies");
//   const movies = await res.json();
//   console.log("movies", movies);
//   return {
//     props: {
//       movies,
//     },
//   };
// }
// export async function getStaticProps() {
//   const res = await fetch("http://localhost:4000/user/all");
//   const users = await res.json();
//   console.log("users", users);
//   return {
//     props: {
//       users,
//     },
//   };
// }
