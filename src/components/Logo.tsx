import Image from "next/image";

export function Logo({ withWordmark = true }: { withWordmark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/ridvay-logo.png"
        alt="Ridvay"
        width={32}
        height={32}
        className="rounded-lg"
        priority
      />
      {withWordmark && (
        <span className="text-[17px] font-semibold tracking-tight text-white">
          Ridvay <span className="text-primary">Code</span>
        </span>
      )}
    </span>
  );
}
