import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Feed = () => {

  const post:PostTypes[] = [
    {
      profileImg: "https://img.freepik.com/premium-photo/image-happy-young-excited-emotional-man-posing-isolated-white-wall_171337-101232.jpg?w=1480",
      name: "Jone Jone",
      userName: "@jonejone",
      title: "Amer soner bangla",
      postImg: "https://pbs.twimg.com/media/HC-MftvXgAAeAC6?format=jpg&name=small",
      like: 6,
      comment: 6
    }
  ]

  return (
    <div className="w-full min-h-screen px-2 pt-5">
      <Tabs defaultValue="foryou">
        <TabsList className="w-full flex border-b border-gray-80 p-2">
          <TabsTrigger className="flex-1" value="foryou">For You</TabsTrigger>
          <TabsTrigger className="flex-1" value="following">Following</TabsTrigger>
        </TabsList>
        <TabsContent value="foryou">Make changes to your account here.</TabsContent>
        <TabsContent value="following">Change your password here.</TabsContent>
        <h1>Hello Social App</h1>
      </Tabs>
    </div>
  )
}

export default Feed
