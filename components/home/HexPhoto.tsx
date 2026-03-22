import Image from "next/image";

// Hexagon clip-path: flat-top hex
const HEX_CLIP = "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)";

export default function HexPhoto() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 scale-[1.04] rounded-full bg-accent/20 blur-2xl"
        aria-hidden="true"
      />

      {/* Hex container */}
      <div
        className="relative h-[320px] w-[280px] overflow-hidden md:h-[380px] md:w-[340px] lg:h-[440px] lg:w-[390px]"
        style={{ clipPath: HEX_CLIP }}
      >
        {/* Placeholder gradient — replace with actual photo when available */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-purple-900/60 to-accent/30" />

        {/*
          When the hero photo is available at /images/hero/justin-kirkey.jpg,
          uncomment this block and remove the gradient placeholder above:

          <Image
            src="/images/hero/justin-kirkey.jpg"
            alt="Justin Kirkey"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 390px"
          />
        */}
      </div>
    </div>
  );
}
