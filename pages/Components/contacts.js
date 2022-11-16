import Link from "next/link";
import Navbar from "./navbar";

const Contacts = () => {

    return (
        <div class="text-center">

            <Navbar />

            <div class="text-center my-10">
            Contacts
            </div>

            <div class="flex justify-center mx-20 my-20 space-x-0 md:space-x-10 flex-col md:flex-row 
            space-y-5 md:space-y-0 px-3 sm:px-0">

                <div class="mx-10">
                    <div class="hover:underline flex">

                        <div class="mx-10">
                            2938749283
                        </div>

                        <div>
                         Logvinov Vlad
                         </div>

                    </div>

                    <div class="hover:underline flex">

                        <div class="mx-10">
                            1234125663
                        </div>

                        <div>
                            Jyperkov Oleg
                         </div>

                    </div>

                    <div class="hover:underline flex">

                        <div class="mx-10">
                             2134521466
                        </div>

                        <div>
                             Procopenko Kostya
                         </div>

                    </div>

                </div>
                
            </div>
            <Link href="/" class="bg-blue-400 py-2 px-4 rounded-full ">Home</Link>
        </div>
    );
}

export default Contacts;