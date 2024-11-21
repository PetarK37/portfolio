import ThemeToggle from "../ui/ThemeToggle";

function Navbar() {
    return (
        <div className="ml-auto flex flex-col h-full align-top justify-top p-4">
            <ThemeToggle />
        </div>
    );
}

export default Navbar;
