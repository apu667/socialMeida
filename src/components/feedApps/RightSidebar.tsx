import type { UserArray } from "@/type/type"
import { Search } from "lucide-react"

const RightSidebar = () => {
    const userArray: UserArray[] = [
        {
            id: 1,
            name: "Jone Jone",
            img: "https://img.freepik.com/premium-photo/image-happy-young-excited-emotional-man-posing-isolated-white-wall_171337-101232.jpg?w=1480"
        },
        {
            id: 1,
            name: "Jone Jone",
            img: "https://img.freepik.com/premium-photo/image-happy-young-excited-emotional-man-posing-isolated-white-wall_171337-101232.jpg?w=1480"
        },
        {
            id: 1,
            name: "Jone Jone",
            img: "https://img.freepik.com/premium-photo/image-happy-young-excited-emotional-man-posing-isolated-white-wall_171337-101232.jpg?w=1480"
        },
        {
            id: 1,
            name: "Jone Jone",
            img: "https://img.freepik.com/premium-photo/image-happy-young-excited-emotional-man-posing-isolated-white-wall_171337-101232.jpg?w=1480"
        },
        {
            id: 1,
            name: "Jone Jone",
            img: "https://img.freepik.com/premium-photo/image-happy-young-excited-emotional-man-posing-isolated-white-wall_171337-101232.jpg?w=1480"
        },
    ]
    return (
        <div className="flex flex-col pt-5 p-4 border-l h-screen gap-10">
            <div className="flex items-center relative text-gray-700">
                <input
                    className="border rounded-2xl px-8 p-2 outline-none"
                    type="text"
                    placeholder="Search" />
                <div className="absolute left-3 flex items-center justify-center">
                    <Search size={18} />
                </div>
            </div>
            <div className="flex flex-col items-start border p-4 rounded-2xl w-full gap-4">
                <p className="text-xl font-bold">Who to follow</p>
                <div className="flex flex-col items-center justify-start gap-4">
                    {
                        userArray.map((item) => (
                            <div className="flex items-center justify-start gap-3">
                                <img
                                    className="h-12 w-12 rounded-full object-cover bg-cover overflow-hidden "
                                    src={item.img} alt="" />
                                <div>
                                    <p>{item.name}</p>
                                    <p className="font-light text-sm">@{item.name.toLowerCase()}</p>
                                </div>
                                <button className="bg-black text-white p-1
                                 rounded-full px-4">Follow</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RightSidebar
