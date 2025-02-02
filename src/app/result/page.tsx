import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react"; // Importing the download icon

export default function Result() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-900 to-black">
      <h1 className="neon-text text-4xl mb-12 floating">Processing Result</h1>

      {/* Image Container with Hover Effect */}
      <div className="futuristic-panel w-96 h-96 flex items-center justify-center overflow-hidden mb-12 relative group">
        <Image
          src="/placeholder.svg"
          alt="Result"
          width={384}
          height={384}
          className="object-cover w-full h-full"
        />
        
        {/* Download Icon - Only Visible on Hover */}
        <a
          href="/placeholder.svg" // Set this to the actual image URL
          download
          className="absolute top-3 left-3 bg-black/60 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Download className="w-6 h-6 text-white" />
        </a>
      </div>

      <Link href="/" className="group relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-secondary to-neon-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-neon-pulse"></div>
        <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
          <span className="flex items-center space-x-5">
            <span className="pr-6 text-gray-100">Back to Home</span>
          </span>
          <span className="pl-6 text-neon-primary group-hover:text-gray-100 transition duration-200">
            &larr; Upload More
          </span>
        </button>
      </Link>
    </main>
  );
}
