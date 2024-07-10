"use client";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation'  

export default function BackButton() {
  const router = useRouter()

  return (
    <button className='flex items-center text-gray-600 font-semibold gap-2 hover:text-gray-800' type="button" onClick={() => router.back()}>
        <ArrowLeft size={20} />
      Click here to go back
    </button>
  )
}