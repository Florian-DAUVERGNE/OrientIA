"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup} from "@/components/ui/radio-group";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RadioButtonCustom from "./radio-button-custom";
import TabContentCustom from "./tabs-content-custom";

const tabs = ["account", "password", "email", "ok"];

export default function AnimatedCarouselDApiDemo() {
  const [currentTab, setCurrentTab] = React.useState(tabs[0]);

  const goToNextTab = () => {
    const currentIndex = tabs.indexOf(currentTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setCurrentTab(tabs[nextIndex]);
  };

  const goToPreviousTab = () => {
    const currentIndex = tabs.indexOf(currentTab);
    const previousIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    setCurrentTab(tabs[previousIndex]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="relative w-[400px]">
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <div className="flex items-center justify-between mb-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={goToPreviousTab}
              aria-label="Previous tab">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </motion.div>
          <TabsList className="grid w-full max-w-[400px] grid-cols-4">
            {tabs.map((tab) => (
              <TabsTrigger key={tab} value={tab}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNextTab}
              aria-label="Next tab">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}>
              
              <TabContentCustom title={"Account"} description={"Make changes to your account here. Click save when you're done."}/>
              <TabContentCustom title={"Test"} description={"Make changes to your account here. Click save when you're done."}/>

              <TabContentCustom
      title="Profile"
      description="Edit your profile information"
      submit={true}
    >
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@peduarte" />
      </div>
    </TabContentCustom>

              
              <TabsContent value="email">
                <Card>
                  <CardHeader>
                    <CardTitle>Email</CardTitle>
                    <CardDescription>
                      Change your email preferences here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="marketing">Marketing emails</Label>
                      <RadioGroup
                        defaultValue="comfortable"
                        className="grid grid-cols-4 gap-8">

                        <RadioButtonCustom name={"Default"} id={0} />
                        <RadioButtonCustom name={"Comfortable"} id={1} />
                        <RadioButtonCustom name={"Compact"} id={2} />

                      </RadioGroup>
                    </div>
                  </CardContent>

                </Card>
              </TabsContent>

              <TabContentCustom title={"Confirmation"} description={"Click save when you're done."} submit={true}/>

              <TabsContent value="ok">
                <Card>
                  <CardHeader>
                    <CardTitle>Confirmation</CardTitle>
                    <CardDescription>
                      Your changes have been saved successfully.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Thank you for updating your information.</p>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => setCurrentTab("account")}>
                      Back to Account
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </form>
      </Tabs>
    </div>
  );
}
