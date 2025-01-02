import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioButtonCustom({ name, id }: { name: string, id:number }) {
   const id_string = `r${id}`
  return (
    <div className="flex flex-col items-center gap-2">
      <Label htmlFor="r1" className="text-sm font-medium">
        {name}
      </Label>
      <RadioGroupItem
        value={name}
        id={id_string}
        className="h-5 w-5 border-2 data-[state=checked]:border-primary data-[state=checked]:bg-primary hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:border-muted"
      />
    </div>
  );
}
