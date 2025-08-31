import { Link } from "react-router-dom";
import { FaRocket, FaCode, FaLayerGroup, FaMobileAlt } from "react-icons/fa";

const Home = () => {
    return (
        <div className="bg-background text-foreground min-h-screen">
            
            <section className="text-center px-6 py-20 bg-primary text-primary-foreground h-[calc(100vh-80px)] flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    React Smart Starter
                </h1>
                <p className="text-lg md:text-2xl mb-6 text-muted-foreground">
                    Build React apps faster with pre-configured routes, auth, context, and components.
                </p>
                <div className="flex justify-center gap-4">
                    <Link 
                        to="/signup" 
                        className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition"
                    >
                        Get Started
                    </Link>
                    <Link 
                        to="/docs" 
                        className="bg-transparent border border-secondary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-secondary-foreground transition"
                    >
                        Learn More
                    </Link>
                </div>
            </section>

            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center p-6 border border-border rounded-lg hover:shadow-lg transition">
                        <FaRocket className="text-4xl mb-4 text-primary" />
                        <h3 className="font-semibold text-xl mb-2">Fast Setup</h3>
                        <p className="text-muted-foreground text-sm">
                            Scaffold your React project instantly with routes, auth, and context pre-configured.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 border border-border rounded-lg hover:shadow-lg transition">
                        <FaCode className="text-4xl mb-4 text-primary" />
                        <h3 className="font-semibold text-xl mb-2">Reusable Components</h3>
                        <p className="text-muted-foreground text-sm">
                            Includes ready-to-use Navbar, Footer, Inputs, Buttons, and more.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 border border-border rounded-lg hover:shadow-lg transition">
                        <FaLayerGroup className="text-4xl mb-4 text-primary" />
                        <h3 className="font-semibold text-xl mb-2">Layouts & Routing</h3>
                        <p className="text-muted-foreground text-sm">
                            Predefined layouts and router setup with private routes and auth guards.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 border border-border rounded-lg hover:shadow-lg transition">
                        <FaMobileAlt className="text-4xl mb-4 text-primary" />
                        <h3 className="font-semibold text-xl mb-2">Responsive & Modern</h3>
                        <p className="text-muted-foreground text-sm">
                            Fully responsive pages and components, ready for mobile and desktop.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-secondary text-secondary-foreground">
                <h2 className="text-3xl font-bold text-center mb-16">⚡ How It Works</h2>

                <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-background rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
                        <div className="flex justify-center items-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 text-primary text-xl font-bold">
                            1
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Scaffold</h3>
                        <p className="text-sm text-muted-foreground">
                            Run the CLI to instantly generate your React project structure.
                        </p>
                    </div>

                    <div className="bg-background rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
                        <div className="flex justify-center items-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 text-primary text-xl font-bold">
                            2
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Configure</h3>
                        <p className="text-sm text-muted-foreground">
                            Adjust theme and routes easily via <code>project.config.json</code>.
                        </p>
                    </div>

                    <div className="bg-background rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
                        <div className="flex justify-center items-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 text-primary text-xl font-bold">
                            3
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Build</h3>
                        <p className="text-sm text-muted-foreground">
                            Start coding with prebuilt layouts, components, and authentication.
                        </p>
                    </div>

                    <div className="bg-background rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
                        <div className="flex justify-center items-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 text-primary text-xl font-bold">
                            4
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Customize</h3>
                        <p className="text-sm text-muted-foreground">
                            Extend and tweak everything as your project grows!
                        </p>
                    </div>
                </div>
            </section>


            <section className="py-20 px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to boost your React development?</h2>
                <Link 
                    to="/signup" 
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition"
                >
                    Get Started Now
                </Link>
            </section>

        </div>
    );
}

export default Home;