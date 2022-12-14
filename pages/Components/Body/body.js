import { useForm } from "react-hook-form";


const Body = () => {


    return (
        <div class="text-green-200">
        
                <div class="container mx-auto py-big px-3 sm:px-0 my-10">
                    <h1 class="text-center text-3xl fond-bold">TailwindCSS</h1>
                    <p class="pt-3 w-full sm:w-[450px] mx-auto ">The quickest way to start using Tailwind CSS in your Next.js project is to use the Next.js + Tailwind CSS Example. This will automatically configure your Tailwind setup based on the official Next.js example. If you'd like to configure Tailwind manually, continue with the rest of this guide.</p>
                </div>   
        
                <div class="flex justify-center space-x-0 md:space-x-10 flex-col md:flex-row space-y-5 md:space-y-0 px-3 sm:px-0">
                    <div class="bg-green-800 py-2 px-4 rounded-full hover:bg-green-600">Button1</div>
                    <div class="bg-green-800 py-2 px-4 rounded-full hover:bg-green-600">Button2</div>
                    <div class="bg-green-800 py-2 px-4 rounded-full hover:bg-green-600">Button3</div>
                    <div class="bg-green-800 py-2 px-4 rounded-full hover:bg-green-600">Button4</div>
                    <div class="bg-green-800 py-2 px-4 rounded-full hover:bg-green-600">Button5</div>
                </div>    
        </div> 
    );
}

export default Body;