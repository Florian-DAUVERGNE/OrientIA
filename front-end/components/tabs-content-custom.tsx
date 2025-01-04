import { Label } from "@/components/ui/label";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { TabsContent } from "@radix-ui/react-tabs";

type TabContentCustomProps = {
  title: string;
  description: string;
  submit?: boolean;
  children?: React.ReactNode; // Ajout des props enfants
};

export default function TabContentCustom({
  title,
  description,
  submit = false,
  children, // Inclure les enfants dans les props
}: TabContentCustomProps) {
  return (
    <TabsContent value={title.toLowerCase()}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">{children}</CardContent>
        {submit && (
          <CardFooter>
            <Button type="submit">Save changes</Button>
          </CardFooter>
        )}
      </Card>
    </TabsContent>
  );
}

  /*const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Affichez ou envoyez les données
    alert(JSON.stringify(formData, null, 2));
  };*/


/*
<TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you&apos;ll be
                      logged out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit">Save password</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
*/