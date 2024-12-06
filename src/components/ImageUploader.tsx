'use client';
import { UploadDropzone } from '@/utils/uploadthing';
import { useState } from 'react';
import Image from 'next/image';

export default function ImageUploader() {
  const [image, setImage] = useState<string>('');
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Image Uploader
        </h2>
        <UploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res && res[0]) {
              console.log('Files: ', res);
              setImage(res[0].url);
              alert('Upload Completed');
            }
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
          className="ut-label:text-gray-600 ut-allowed-content:text-gray-500 ut-button:bg-blue-500 ut-button:hover:bg-blue-600"
        />
        {image && (
          <div className="mt-8 flex justify-center">
            <Image
              src={image}
              alt="Uploaded"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
    </div>
  );
}
