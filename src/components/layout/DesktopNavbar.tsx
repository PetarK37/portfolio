import ThemeToggle from "../ui/ThemeToggle";

function DesktopNavbar() {
    return (
        <div className="flex flex-col h-full align-top justify-top p-4">
            <ThemeToggle />
        </div>
    );
}

export default DesktopNavbar;
