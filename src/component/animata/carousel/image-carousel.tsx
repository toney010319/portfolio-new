import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ICarouselItem {
  id: number;
  title: string;
  image: string;
}

interface IImageCarouselProps {
  items: ICarouselItem[];
}

export default function ImageCarousel({ items: initialItems }: IImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [isZooming, setIsZooming] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % initialItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + initialItems.length) % initialItems.length);
  };

  const handleImageClick = (image: string) => {
    setZoomedImage(image);
    setIsZooming(true);
  };

  const closeZoom = () => {
    setIsZooming(false);
    setTimeout(() => setZoomedImage(null), 300);  
  };

  const visibleIndices = [
    (currentIndex - 1 + initialItems.length) % initialItems.length,
    currentIndex,
    (currentIndex + 1) % initialItems.length,
  ];

  const visibleItems = visibleIndices.map((index) => initialItems[index]);

  return (
    <div className="carousel-container relative h-[500px] w-auto overflow-hidden rounded-2xl bg-inherit p-2">
       
      <div
        onClick={handlePrev}
        className="navigation-item-left absolute left-0 top-[50%] z-20 flex h-10 w-10 translate-y-[-50%] cursor-pointer items-center justify-center rounded-lg hover:bg-gray-200 hover:bg-opacity-20 bg-clip-padding backdrop-blur-sm backdrop-filter transition-all duration-300 ease-in-out"
      >
        <ChevronLeft className="text-[#2EB2D3]" />
      </div>
      <div
        onClick={handleNext}
        className="navigation-item-right absolute right-0 top-[50%] z-20 flex h-10 w-10 translate-y-[-50%] cursor-pointer items-center justify-center rounded-lg hover:bg-gray-200 hover:bg-opacity-20 bg-clip-padding backdrop-blur-sm backdrop-filter transition-all duration-300 ease-in-out"
      >
        <ChevronRight className="text-[#2EB2D3]" />
      </div>

       
      {visibleItems.map((item, index) => (
        <div
          key={item.id}
          className="absolute left-[50%] top-[20%] z-10 h-[250px] w-[200px] rounded-xl bg-gray-500 cursor-pointer transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform:
              index === 1
                ? "translateX(-50%) scale(1.1)"
                : index === 0
                  ? "translateX(-150%) rotate(-20deg)"
                  : "translateX(50%) rotate(20deg)",
            filter: index === 1 ? "none" : "blur(4px)",
            zIndex: index === 1 ? 30 : 10,
          }}
          onClick={() => handleImageClick(item.image)}
        ></div>
      ))}

      
      {zoomedImage && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300 ease-in-out ${isZooming ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeZoom}
        >
          <div 
            className={`relative max-h-[90vh] max-w-[90vw] transition-transform duration-300 ease-in-out ${isZooming ? 'scale-100' : 'scale-90'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={zoomedImage} 
              alt="Zoomed certificate" 
              className="max-h-full max-w-full object-contain"
            />
            <button
              onClick={closeZoom}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none transition-colors duration-200 ease-in-out"
            >
              <X size={32} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}