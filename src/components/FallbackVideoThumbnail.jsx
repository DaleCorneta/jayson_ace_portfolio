import { FiPlay } from "react-icons/fi";

const FallbackVideoThumbnail = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-3xl">
      <div className="flex flex-col items-center gap-2">
        <FiPlay className="text-accent w-12 h-12" />
        <span className="text-white text-sm font-semibold">Video Preview</span>
      </div>
    </div>
  );
};

export default FallbackVideoThumbnail;
