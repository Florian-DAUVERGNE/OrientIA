import { Label } from "@/components/ui/label";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { TabsContent } from "@radix-ui/react-tabs";

export default function TabContentCustom({title,description}: {title: string, description: string}) {
  return (
    <TabsContent value={title.toLowerCase()}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@peduarte" />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Save changes</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
