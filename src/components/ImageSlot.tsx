import { ImagePlus } from "lucide-react";

export default function ImageSlot({
  src,
  alt,
  label,
  className = "",
  iconSize = 20,
}: {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  iconSize?: number;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={src}
        alt={alt}
        className={`object-cover bg-slate-900 ${className}`}
      />
    );
  }

  const placeholderLabel = label ?? alt;

  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 bg-slate-900 border border-dashed border-slate-700 text-slate-600 ${className}`}
      title={`Belum ada gambar — tempat untuk: ${placeholderLabel}`}
    >
      <ImagePlus size={iconSize} />
      <span className="text-[9px] text-center px-1 leading-tight">
        {placeholderLabel}
      </span>
    </div>
  );
}
