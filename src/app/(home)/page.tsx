import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { H1 } from "~/components/ui/typography";

export default function Page() {
  return (
    <>
      <Image
        src="/logo.png"
        width={140}
        height={140}
        alt="Pokemon Emerald Flow Logo"
        priority
      />
      <H1>Pokemon Emerald Flow</H1>
      <Badge variant={"outline"}>v1.0.0-beta</Badge>
    </>
  );
}
