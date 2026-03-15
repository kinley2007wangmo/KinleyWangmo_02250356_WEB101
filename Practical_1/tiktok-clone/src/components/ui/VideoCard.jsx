import Image from "next/image";

export default function VideoCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">

      <h2 className="text-lg font-semibold">Sample Video</h2>

      <Image
        src="/video1.jpg"
        alt="video"
        width={400}
        height={500}
        className="rounded-lg"
      />

      <p className="mt-2 text-gray-600">
        Sample TikTok video description
      </p>

    </div>
  );
}