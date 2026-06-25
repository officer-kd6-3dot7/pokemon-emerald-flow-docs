import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export const Option = () => {
  return (
    <Card className="flex flex-row items-center justify-around">
      <CardHeader>
        <CardTitle>On</CardTitle>
        <CardDescription>Repel is always active</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
};
