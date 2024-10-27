import Button from "@/components/global/button";
import Radio from "@/components/global/inputs/radio";
import Textarea from "@/components/global/inputs/textarea";
import Select from "@/components/global/inputs/select";
import Text from "@/components/global/inputs/text";
import { Questions } from "@/types/questions";
import InputWithLabel from "@/components/global/inputs/input";

interface props {
  title: string;
  questions: Questions[];
}

const Application = ({ title, questions }: props) => {
  return (
    <div className="rounded-md border-2 border-black">
      <p>Apply to {title}</p>

      <Text
        meta={{
          type: "text",
          title: "Name",
          placeholder: "Enter a Name",
          maxLength: 250,
          value: "SAMPLE NAME",
          disabled: true,
        }}
      />

      <InputWithLabel
        meta={{
          title: "Email",
          placeholder: "Enter your email",
          value: "", // Initial value can be empty
        }}
      />

      {questions.map((question, index) => {
        const { type } = question;

        if (type === "radio") return <Radio meta={question} key={index} />;
        if (type === "textarea")
          return <Textarea meta={question} key={index} />;
        if (type === "select") return <Select meta={question} key={index} />;
      })}

      <Button>Submit</Button>
    </div>
  );
};

export default Application;
