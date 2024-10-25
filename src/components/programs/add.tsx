import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  // AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import TextInput from "@/components/global/inputs/text";
import Select from "@/components/global/inputs/select";
import Textarea from "@/components/global/inputs/textarea";

const Add = () => {
  return (
    <AlertDialogContent className="max-w-4xl">
      <AlertDialogHeader>
        <AlertDialogTitle className="text-xl font-medium">
          Add Project
        </AlertDialogTitle>
        <TextInput
          meta={{
            title: "Title",
            type: "text",
            placeholder: "i.e WINC",
            maxLength: 32,
            value: "",
            disabled: false,
          }}
        />
        <Textarea
          meta={{
            title: "Description",
            type: "textarea",
            placeholder: "Description of your project",
            maxLength: 500,
            value: "",
            disabled: false,
          }}
        />
        <Select
          meta={{
            title: "Tech Stack",
            type: "select",
            options: ["TypeScript", "Next.js", "TailwindCSS"],
            value: "",
            disabled: false,
          }}
        />
        <TextInput
          meta={{
            title: "Total Spots",
            type: "text",
            placeholder: "e.g 10",
            maxLength: 5,
            value: "",
            disabled: false,
          }}
        />
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel className="w-1/6 border-starlight-blue font-bold">
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction className="w-1/6 bg-starlight-blue">
          Add
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default Add;
