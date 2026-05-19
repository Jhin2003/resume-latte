import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between pl-12 py-6  bg-white shadow-md">
     
        <Image
          src="/brand-logo.svg"
          alt="Resume Latte Logo"
          width={120}
          height={120}
          className="drop-shadow-lg"
        />
  
    </header>
  );
}
