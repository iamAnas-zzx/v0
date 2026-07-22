import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import ProjectForms from "@/modules/home/components/project-form";

export default function Home() {
  return (
    <div className="flex items-center justify-center  w-full px-4 py-8">
      <div className='max-w-5xl w-full'>
        <section className="space-y-8 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <Image
              src={"/v0-logo.svg"}
              width={100}
              height={100}
              alt="logo"
              className="hidden md:block invert dark:invert-0"
            />
          </div>
          <h1 className="text-2xl md:text-5xl font-bold text-center ">Build Something with 😹</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center">
            Create apps and website by chatting with AI
          </p>
          <div className="max-w-3xl w-full" >

            <ProjectForms/>
          </div>
        </section>
      </div>
    </div>
  );
}
