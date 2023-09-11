import Link from "next/link";
import UserNav from "./user-nav";
import ModeToggle from "./mode-toggle";

export default function NavBar() {
  return (
    <header className="flex h-16 items-center border-b px-4">
      <Link
        href="/"
        className="text-lg font-bold transition-colors hover:text-primary"
      >
        MyHub
      </Link>
      <nav className="mx-24 flex items-center space-x-4 lg:space-x-6">
        <Link
          href="/task"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          任务
        </Link>
        <Link
          href="/note"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          笔记
        </Link>
      </nav>

      <div className="ml-auto flex items-center space-x-4">
        <ModeToggle />
        <UserNav />
      </div>
    </header>
  );
}
