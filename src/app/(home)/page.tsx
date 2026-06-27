import Image from "next/image";
import { Md } from "~/components/markdown";
import { Badge } from "~/components/ui/badge";

export default function Page() {
  // prettier-ignore
  return (
<>
<Image
src="/logo.png"
width={140}
height={140}
alt="Pokemon Emerald Flow Logo"
priority
/>
<Md>
{
`
# Pokemon Emerald Flow
`  
}  
</Md>   
<Badge variant={"outline"}>v1.0.0-beta</Badge>
</>
);
}
