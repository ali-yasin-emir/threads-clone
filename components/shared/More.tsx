import { CgDetailsMore } from "react-icons/cg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

import { SignOutButton, UserButton, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const More = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CgDetailsMore className="cursor-pointer text-[#B7B1A8] text-[32px]" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-4 w-full pe-12 bg-[#101010] rounded-xl py-4 px-2 text-white">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        <Link href="/">
          <DropdownMenuItem className="text-lg font-semibold pointer-events-none">
            Görünüş
          </DropdownMenuItem>
        </Link>
        <Link href="/">
          <DropdownMenuItem className="text-lg font-semibold pointer-events-none">
            Ayarlar
          </DropdownMenuItem>
        </Link>
        <Link href="/">
          <DropdownMenuItem className="text-lg font-semibold pointer-events-none">
            Kaydedildi
          </DropdownMenuItem>
        </Link>
        <Link href="/">
          <DropdownMenuItem className="text-lg font-semibold pointer-events-none">
            Beğenmelerin
          </DropdownMenuItem>
        </Link>
        <Link href="/">
          <DropdownMenuItem className="text-lg font-semibold pointer-events-none">
            Sorun bildir
          </DropdownMenuItem>
        </Link>
        <div
          onClick={() => signOut(() => router.push("/"))}
          className="cursor-pointer"
        >
          <SignOutButton>
            <DropdownMenuItem className="text-lg font-semibold pointer-events-none">
              Çıkış yap
            </DropdownMenuItem>
          </SignOutButton>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default More;
