import { Tag as TagType } from "@/types/tag";
import Tag from "../global/tag";

interface props {
  title: string;
  description: string;
  tags: TagType[];
}

const Project = ({ title, description, tags }: props) => {
  return (
    <div className="aspect-square w-1/4 flex-col rounded-md border border-gray-300 bg-white">
      <div className="px-8 py-8 text-3xl font-bold">{title}</div>
      <div className="flex flex-wrap gap-2 px-8 py-0">
        {tags.map((text, index) => (
          <Tag key={index}>{text}</Tag>
        ))}
      </div>
      <div className="px-8 py-4">{description}</div>
    </div>
  );
};

export default Project;
