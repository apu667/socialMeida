import type { MenuTypes } from "@/type/type"
import { Bell, Bookmark, Home, Search, User } from "lucide-react"


const LeftSidebar = () => {


    const menu: MenuTypes[] = [
        {
            id: 1,
            name: "Home",
            ions: Home,
        },
        {
            id: 2,
            name: "Search",
            ions: Search,
        },
        {
            id: 3,
            name: "Notification",
            ions: Bell,
        },
        {
            id: 4,
            name: "Bookmark",
            ions: Bookmark,
        },
        {
            id: 5,
            name: "profile",
            ions: User,
        },
    ]

    return (
        <div className="flex flex-col items-start justify-start pt-5 p-4 border-r h-screen gap-8">
            {/* logo section */}
            <div className="flex items-center justify-center gap-2 cursor-pointer">
                <img
                    className="h-10 w-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/960px-Logo_of_Twitter.svg.png" alt="apu sikder" />
                <p className="flex items-center text-2xl font-bold italic">Tweeter</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-4 w-full">
                {
                    menu.map((items) => (
                        <div
                            key={items.id}
                            className="flex items-center gap-2 text-lg font-medium hover:bg-violet-600 w-full p-2 rounded-xl hover:text-white px-4 transition-all duration-300 cursor-pointer">
                            <items.ions size={20} />
                            <p>{items.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LeftSidebar
