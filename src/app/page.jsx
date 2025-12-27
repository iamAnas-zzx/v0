import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button variant="primary" className="hover:cursor-pointer">Click Me</Button>
    </div>
  );
}
