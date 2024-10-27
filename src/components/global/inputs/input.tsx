import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextInput } from "@/types/questions";

const InputWithLabel = ({ meta }: { meta: TextInput }) => {
  const { title, placeholder, value } = meta;

  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor={title}>{title}</Label>
      <Input type="email" id={title} placeholder={placeholder} value={value} />
    </div>
  );
};

export default InputWithLabel;
