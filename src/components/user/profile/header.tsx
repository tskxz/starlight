import { Github, Mail } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

interface HeaderProps {
  name: string;
  email: string;
  github: string;
  discord: string;
  status: string;
  profilePic: string;
  projects: string[];
}

const ProjectDiv = ({ text }: { text: string }) => {
  return (
    <p className="rounded-md bg-starlight-blue px-7 py-1.5 text-sm font-bold text-white">
      {text}
    </p>
  );
};

const Projects = ({ projects }: { projects: string[] }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex flex-nowrap items-center gap-3">
        {projects.map((status, index) => (
          <ProjectDiv key={index} text={status} />
        ))}
      </div>
    </div>
  );
};

const Header = ({
  name,
  email,
  github,
  discord,
  status,
  profilePic,
  projects,
}: HeaderProps) => {
  return (
    <div className="mb-10 mt-7 flex max-w-full flex-row items-center gap-5 overflow-hidden">
      <img
        src={profilePic}
        alt="profile picture"
        className="hidden h-40 w-1/6 rounded-xl object-cover md:block"
      />
      <div className="flex max-h-full w-full max-w-full flex-col gap-1">
        <h1 className="text-3xl font-bold">{name}</h1>
        <div className="max-h-full max-w-full">
          <div className="gap-x-1/2 gap-y-1/2 grid grid-cols-[30px_1fr] items-center">
            <Mail className="h-5 w-5" />
            <a
              href={`mailto:${email}`}
              className="text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              {email}
            </a>

            <Github className="h-5 w-5" />
            <a
              href={`https://github.com/${github}`}
              className="text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              {github}
            </a>

            <FaDiscord className="h-5 w-5" />
            <a
              href={`https://discord.com/users/${discord}`}
              className="text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              {discord}
            </a>
          </div>
        </div>
        <div className="flex max-w-full items-center">
          <p className="rounded-md bg-starlight-blue px-7 py-1.5 text-sm font-bold text-white">
            {status}
          </p>
          <div className="mx-4 h-12 border-l-[1px] border-starlight-blue"></div>
          <Projects projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Header;
