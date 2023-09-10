import MainNav from "./main-nav";
import UserNav from "./user-nav";

export default function NavBar() {
  return (
    <div className="flex h-16 items-center px-4">
      MyHub Web
      <MainNav className="mx-6" />
      <div className="ml-auto flex items-center space-x-4">
        <UserNav />
      </div>
    </div>
  );
}
