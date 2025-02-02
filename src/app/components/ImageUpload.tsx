"use client"

import { useState, type ChangeEvent } from "react"
import Image from "next/image"
import { Upload } from "lucide-react"

interface ImageUploadProps {
  label: string
}

export default function ImageUpload({ label }: ImageUploadProps) {
  const [image, setImage] = useState<string | null>(null)

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <label className="mb-4 text-lg neon-text">{label}</label>
      <div className="futuristic-panel w-64 h-64 flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            src={image || "/placeholder.svg"}
            alt="Uploaded"
            width={256}
            height={256}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-400">No image uploaded</p>
          </div>
        )}
      </div>
      <label
        htmlFor={`file-upload-${label}`}
        className="mt-4 cursor-pointer neon-border px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors duration-200"
      >
        <span className="text-sm font-semibold text-white">Choose File</span>
        <input
          id={`file-upload-${label}`}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </label>
    </div>
  )
}

