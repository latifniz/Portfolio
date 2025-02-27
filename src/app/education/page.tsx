import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Briefcase className="h-4 w-4" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          {/* <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            July 2023 - 2026
          </FramerWrapper> */}
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor of Computer Science, <br /> International Islamic
              University Islamabad
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I hold a Computer Science Degree from the International Islamic
              University Islamabad. My academic journey equipped me with a
              strong foundation in problem-solving, creative thinking, and
              software development. I have developed excellent collaboration
              skills through team projects and hands-on experience, enabling me
              to work effectively in diverse and dynamic environments. My focus
              is on building scalable, efficient solutions to real-world
              problems, leveraging my technical expertise and attention to
              detail.
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
