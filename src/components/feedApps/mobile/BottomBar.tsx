import { Clapperboard, House, Tv,User,Youtube   } from "lucide-react"

const BottomBar = () => {

  const navMenu=[
    {
      name:"Home",
      icon:House
    },
    {
      name:"Channels",
      icon:Tv
    },
    {
      name:"Reels",  
      icon:Clapperboard
    },
    {
      name:"Theater",
      icon:Youtube
    },
    {
      name:"Profile",
      icon:User
    }
  ]

  return (
    <div className="fixed  md:hidden bottom-0 left-0 right-0 h-14 bg-[#212737] w-full text-gray-100 flex items-center justify-around border-t shadow-2xl">
  
      {navMenu.map((item) => (
        <div key={item.name} className="flex flex-col items-center text-sm">
          <item.icon size={20} />
          {item.name}
        </div>
      ))}
    </div>
  )
}

export default BottomBar
