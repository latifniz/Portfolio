import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "YourDrive - An Api that let you use github as cloud storage",
      description: `YourDrive let you use your personal github account as full blown cloud storage,
       where you can create folders, upload files with no max storage limits, it's just a fun project .`,
      tags: ["NodeJS", "Express", "PostgreSQL", "GitHub"],
      link: "https://yourdrive.abdullatifnizamani.com/api/v1/docs",
    },

    {
      title: "Festiv - Generate The Perfect Schedule For Your Next Festival ",
      description: `Explore festival lineups, pick your favorite events,
         and quickly generate the perfect schedule with our smart, overlap-free tool, 
         specially design to help you have the best fest. `,
      tags: ["NodeJS", "React", "Festival", "Scheduling"],
      link: "https://festiv.ai",
    },
    {
      title: "Connectiiu- Social Media App only for University Students",
      description: `Connectiiu is a social media app exclusively for students of a particular university.
       Designed to enhance campus life, it aims to better connect students with each other,
        foster meaningful interactions, and create a more engaging university experience.
       (Currently under Development)`,
      tags: ["Nextjs", "Typescript", "Social Media", "University"],
      link: "https://connectiiu.abdullatifnizamani.com/",
    },
    {
      title: "FileCraft - UI for the yourDrive API",
      description:
        "FileCraft Is A UI that uses the yourDrive API and Lets you use github as personal cloud storage, it's a fun project - (Currently under Devlelopment) ",
      tags: ["React", "Github", "Cloud Storage", "Drive"],
      link: "https://filecraft.abdullatifnizamani.com/",
    },
    {
      title: "ThroughMyEyes - A Personal Blog App ",
      description: `ThroughMyEyes is my personal blog where I share stories for kids, insights about technology, and reflections on life.
         It’s a creative space where I explore diverse topics, 
        from imaginative tales to tech trends and everyday experiences.`,
      tags: ["React", "MongoDB", "Blog"],
      link: "https://blog.abdullatifnizamani.com/",
    },
    {
      title: "Gossipy - A Secure Messaging App",
      description: `Gossipy is a private messaging app designed for secure
       and secret communication. Built for those who value privacy, 
       it allows users to send messages without leaving a trace. The app is deployed
        privately and shared only with trusted individuals, making it a tool for 
        disappearing from the internet while staying connected with your inner circle.`,
      tags: ["Nextjs", "Pusher", "Prisma", "MongoDB"],
      link: "https:gossipy.abdullatifnizamani.com/",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
