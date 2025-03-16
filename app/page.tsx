"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState("bento");
  const [username, setUsername] = useState("EthanRodrigues001");
  const [discord, setDiscord] = useState("dev_ethan");
  const [linkedin, setLinkedin] = useState("Ethan-Rodrigues");
  const [twitter, setTwitter] = useState("EthanRo97737635");
  const [favoriteRepo, setFavoriteRepo] = useState("Blingo2.0");
  const [favoriteRepoDesc, setFavoriteRepoDesc] = useState(
    "🚀 Ai based project roadmap generation: People new at hakathon get guidance on how to start their project and simplify the process of development."
  );

  // Badges state
  const [badges, setBadges] = useState("📍 Navi Mumbai, India,⭐ Resume");
  const [badgeColor, setBadgeColor] = useState("#151b23");

  // Tech stack state
  const [tech1, setTech1] = useState("nextjs");
  const [tech2, setTech2] = useState("react");
  const [tech3, setTech3] = useState("tailwind");
  const [tech4, setTech4] = useState("typescript");
  const [tech5, setTech5] = useState("nodejs");
  const [techColor, setTechColor] = useState("#151b23");

  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    try {
      if (activeTab === "bento") {
        // Generate all three bento grid parts
        const topUrl = `/api/bento-top?favoriteRepo=${encodeURIComponent(
          favoriteRepo
        )}&favoriteRepoDesc=${encodeURIComponent(favoriteRepoDesc)}`;
        const middleUrl = `/api/bento-middle?username=${encodeURIComponent(
          username
        )}&discord=${encodeURIComponent(discord)}&linkedin=${encodeURIComponent(
          linkedin
        )}&twitter=${encodeURIComponent(twitter)}`;

        setImageUrls([topUrl, middleUrl]);
      } else if (activeTab === "badges") {
        const url = `/api/badges?badges=${encodeURIComponent(
          badges
        )}&color=${encodeURIComponent(badgeColor)}`;
        setImageUrls([url]);
      } else if (activeTab === "techstack") {
        const url = `/api/techstack?tech1=${encodeURIComponent(
          tech1
        )}&tech2=${encodeURIComponent(tech2)}&tech3=${encodeURIComponent(
          tech3
        )}&tech4=${encodeURIComponent(tech4)}&tech5=${encodeURIComponent(
          tech5
        )}&color=${encodeURIComponent(techColor)}`;
        setImageUrls([url]);
      }
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyMarkdown = () => {
    const baseUrl = window.location.origin;
    let markdown = "";

    if (activeTab === "bento") {
      // Create markdown for all three bento parts
      markdown = imageUrls
        .map((url) => `![GitHub Profile Element](${baseUrl}${url})`)
        .join("\n\n");
    } else {
      // For badges and tech stack
      markdown = `![GitHub Profile Element](${baseUrl}${imageUrls[0]})`;
    }

    navigator.clipboard.writeText(markdown);
    alert("Markdown copied to clipboard!");
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        GitHub Profile Image Generator
      </h1>

      <Tabs
        defaultValue="bento"
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="bento">Bento Grid</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="techstack">Tech Stack</TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Configure Your Image</CardTitle>
              <CardDescription>
                Customize your GitHub profile image
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <TabsContent value="bento" className="space-y-4 mt-0">
                <div className="space-y-2">
                  <Label htmlFor="username">GitHub Username</Label>
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Your GitHub username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discord">Discord Username</Label>
                  <Input
                    id="discord"
                    value={discord}
                    onChange={(e) => setDiscord(e.target.value)}
                    placeholder="Your Discord username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discord">LinkedIn Username</Label>
                  <Input
                    id="linkedin"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="Your LinkedIn username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discord">Twitter Username</Label>
                  <Input
                    id="twitter"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    placeholder="Your Twitter username"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="favoriteRepo">Favorite Repository</Label>
                  <Input
                    id="favoriteRepo"
                    value={favoriteRepo}
                    onChange={(e) => setFavoriteRepo(e.target.value)}
                    placeholder="Your favorite repository name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="favoriteRepoDesc">
                    Repository Description
                  </Label>
                  <Textarea
                    id="favoriteRepoDesc"
                    value={favoriteRepoDesc}
                    onChange={(e) => setFavoriteRepoDesc(e.target.value)}
                    placeholder="Description of your favorite repository"
                    rows={3}
                  />
                </div>
              </TabsContent>

              <TabsContent value="badges" className="space-y-4 mt-0">
                <div className="space-y-2">
                  <Label htmlFor="badges">Badges (comma separated)</Label>
                  <Textarea
                    id="badges"
                    value={badges}
                    onChange={(e) => setBadges(e.target.value)}
                    placeholder="📍 Location,⭐ Resume,etc"
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground">
                    Format: &quot;emoji text&quot; separated by commas. For
                    links use &quot;text|url&quot;
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="badgeColor">Badge Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="badgeColor"
                      value={badgeColor}
                      onChange={(e) => setBadgeColor(e.target.value)}
                      placeholder="rgb(19, 28, 37)"
                    />
                    <input
                      type="color"
                      value={
                        badgeColor.startsWith("#") ? badgeColor : "#131c25"
                      }
                      onChange={(e) => setBadgeColor(e.target.value)}
                      className="w-12 h-10 rounded"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="techstack" className="space-y-4 mt-0">
                <div className="space-y-2">
                  <Label htmlFor="tech1">Technology 1</Label>
                  <Input
                    id="tech1"
                    value={tech1}
                    onChange={(e) => setTech1(e.target.value)}
                    placeholder="nextjs"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tech2">Technology 2</Label>
                  <Input
                    id="tech2"
                    value={tech2}
                    onChange={(e) => setTech2(e.target.value)}
                    placeholder="react"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tech3">Technology 3</Label>
                  <Input
                    id="tech3"
                    value={tech3}
                    onChange={(e) => setTech3(e.target.value)}
                    placeholder="tailwind"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tech4">Technology 4</Label>
                  <Input
                    id="tech4"
                    value={tech4}
                    onChange={(e) => setTech4(e.target.value)}
                    placeholder="typescript"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tech5">Technology 5</Label>
                  <Input
                    id="tech5"
                    value={tech5}
                    onChange={(e) => setTech5(e.target.value)}
                    placeholder="nodejs"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="techColor">Badge Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="techColor"
                      value={techColor}
                      onChange={(e) => setTechColor(e.target.value)}
                      placeholder="rgb(19, 28, 37)"
                    />
                    <input
                      type="color"
                      value={techColor.startsWith("#") ? techColor : "#131c25"}
                      onChange={(e) => setTechColor(e.target.value)}
                      className="w-12 h-10 rounded"
                    />
                  </div>
                </div>
              </TabsContent>
            </CardContent>

            <CardFooter>
              <Button
                onClick={generateImage}
                disabled={loading}
                className="w-full"
              >
                {loading ? "Generating..." : "Generate Image"}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Your generated image will appear here
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
              {imageUrls.length > 0 ? (
                <div className="space-y-4 w-full">
                  {imageUrls.map((url, index) => (
                    <div
                      key={index}
                      className="border rounded-lg overflow-hidden"
                    >
                      <Image
                        src={url || "/placeholder.svg"}
                        alt={`GitHub Profile Element ${index + 1}`}
                        width={800}
                        height={200}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => window.open(imageUrls[0], "_blank")}
                    >
                      Open Full Size
                    </Button>
                    <Button onClick={copyMarkdown}>Copy Markdown</Button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  Click &quot;Generate Image&quot; to create your custom image
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Tabs>
      <footer
        style={{
          textAlign: "center",
          marginTop: "20px",
          padding: "10px",
          background: "#151b23",
          color: "#fff",
          borderRadius: "10px",
        }}
      >
        Created with ❤️ by{" "}
        <a
          href="https://github.com/EthanRodrigues001"
          target="_blank"
          style={{ color: "#fff" }}
        >
          Ethan
        </a>
      </footer>
    </div>
  );
}
