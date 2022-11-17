import Link from "next/link";

const Navbar = () => {

    return (
        <nav class="flex justify-between pt-10 container mx-auto px-5">
            
            <span class="fond-bold text-3xl text-blue-500">
                Tailwind
            </span>

            <div class="space-x-5 text-blue-300 uppercase">
                <Link href="/Components/about" class="hover:underline">About</Link>
                <Link href="/Components/contacts" class="hover:underline">Contacts</Link>
                <Link href="/Components/redux" class="hover:underline">Payment</Link>
                <Link href="/Components/ToDo/TodoList" class="hover:underline">ToDo</Link>
            </div>
        </nav>
    );
}

export default Navbar;