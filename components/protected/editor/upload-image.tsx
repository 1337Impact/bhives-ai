import { useEffect, useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

interface AddProductImageProps {
  setImgFile: (imgFile: File | null) => void;
  image?: string | null;
}

export default function UploadImage({ setImgFile, image }: AddProductImageProps) {
  const [productImage, setProductImage] = useState<string | null>(null);

  useEffect(() => {
    if (image) {
      setProductImage(image);
    }
  }, [image]);

  const handleUploadClick = async (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      setImgFile(file);
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        setProductImage(reader.result as string);
      };
    }
  };

  const handleResetClick = () => {
    setProductImage(null);
    setImgFile(null);
  };

  return (
    <div className="w-24 h-24 flex justify-center items-center border border-gray-300 rounded-lg overflow-hidden relative">
      {productImage ? (
        <div onClick={handleResetClick} className="w-full h-full cursor-pointer">
          <Image
            width={100}
            height={100}
            src={productImage}
            alt="product image"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <label className="w-full h-full flex justify-center items-center cursor-pointer relative">
          <input
            accept="image/jpeg,image/png,image/webp"
            id="contained-button-file"
            name="logo"
            type="file"
            onChange={handleUploadClick}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          />
          <Plus />
        </label>
      )}
    </div>
  );
}
