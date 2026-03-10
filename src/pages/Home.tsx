import Feed from "@/components/feedApps/Feed"
import LeftSidebar from "@/components/feedApps/LeftSidebar"
import RightSidebar from "@/components/feedApps/RightSidebar"


const Home = () => {
    return (
        <div className="flex max-w-7xl mx-auto px-6">
            <div className="w-1/4">
                <LeftSidebar />
            </div>
            <div className="w-2/4">
                <Feed />
            </div>
            <div className="w-1/4">
                <RightSidebar />
            </div>
        </div>
    )
}

export default Home
