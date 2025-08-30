import { FaUsers, FaDollarSign, FaClock, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center gap-4 p-6 bg-secondary rounded-lg shadow hover:shadow-lg transition">
                    <FaUsers className="text-4xl text-primary" />
                    <div>
                        <p className="text-muted-foreground text-sm">Total Users</p>
                        <p className="text-xl font-bold">1,234</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-secondary rounded-lg shadow hover:shadow-lg transition">
                    <FaDollarSign className="text-4xl text-primary" />
                    <div>
                        <p className="text-muted-foreground text-sm">Revenue</p>
                        <p className="text-xl font-bold">$12,345</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-secondary rounded-lg shadow hover:shadow-lg transition">
                    <FaClock className="text-4xl text-primary" />
                    <div>
                        <p className="text-muted-foreground text-sm">Active Sessions</p>
                        <p className="text-xl font-bold">123</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-secondary rounded-lg shadow hover:shadow-lg transition">
                    <FaChartLine className="text-4xl text-primary" />
                    <div>
                        <p className="text-muted-foreground text-sm">Growth</p>
                        <p className="text-xl font-bold">+8%</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-6 bg-secondary rounded-lg shadow hover:shadow-lg transition">
                    <h2 className="font-bold text-lg mb-4">User Activity</h2>
                    <p className="text-muted-foreground">Chart placeholder</p>
                </div>
                <div className="p-6 bg-secondary rounded-lg shadow hover:shadow-lg transition">
                    <h2 className="font-bold text-lg mb-4">Revenue Trends</h2>
                    <p className="text-muted-foreground">Chart placeholder</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;