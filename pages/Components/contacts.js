import Link from "next/link";

const Contacts = () => {

    return (
        <div class="text-center my-20">
            <div class="text-center my-10">
            Contacts
            </div>

            <div class="flex justify-center mx-20 my-20 space-x-0 md:space-x-10 flex-col md:flex-row 
            space-y-5 md:space-y-0 px-3 sm:px-0">

                <div class="mx-10">
                    <div>
                        2938749283
                    </div>
                    <div>
                        1234125663
                    </div>
                    <div>``
                        2134521466
                    </div>
                </div>

                <div>
                    <div>
                        Asdfsdfg UYGusdf
                    </div>
                    <div>
                        JKHGkjhgf DSFJhfg
                    </div>
                    <div>
                        JSHDgj SFDKJBkj
                    </div>

                </div>
                
            </div>
            <Link href="/" class="bg-blue-400 py-2 px-4 rounded-full ">Home</Link>
        </div>
    );
}

export default Contacts;