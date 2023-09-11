import Link from "next/link";
import UserNav from "./user-nav";

export default function NavBar() {
  return (
    <header className="sticky flex items-center h-16 px-4">
      MyHub Web
      <nav className="flex items-center mx-6 space-x-4 lg:space-x-6">
        <Link
          href="/"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          主页
        </Link>
        <Link
          href="/task"
          className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
        >
          任务
        </Link>
        <Link
          href="/note"
          className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
        >
          笔记
        </Link>
      </nav>
      <div className="flex items-center ml-auto space-x-4">
        <UserNav />
      </div>
    </header>
  );
}
