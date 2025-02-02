import Link from "next/link";
import ImageUpload from "./components/ImageUpload";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-900 to-black">
      <h1 className="neon-text text-4xl mb-12 floating relative z-10">
        ML Image Processor
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
        <ImageUpload label="Upload Image 1" />
        <ImageUpload label="Upload Image 2" />
      </div>
      <Link href="/result" className="group relative z-10">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-primary to-neon-secondary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-neon-pulse"></div>
        <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
          <span className="flex items-center space-x-5">
            <span className="pr-6 text-gray-100">Submit</span>
          </span>
          <span className="pl-6 text-neon-secondary group-hover:text-gray-100 transition duration-200">
            Process Images &rarr;
          </span>
        </button>
      </Link>
    </main>
  );
}
