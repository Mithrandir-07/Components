import Link from "next/link";
import App from "./App";

const Navbar = () => {

    return (
        <nav class="flex justify-between pt-10 container mx-auto px-5">
            
            <span class="fond-bpld text-3xl">
                Tailwind
            </span>

            <div class="space-x-5">
                <Link href="/Components/about" class="hover:underline">About</Link>
                <Link href="/Components/contacts" class="hover:underline">Contacts</Link>
                <Link href="/Components/redux" class="hover:underline">Payment</Link>
            </div>
        </nav>
    );
}

export default Navbar;