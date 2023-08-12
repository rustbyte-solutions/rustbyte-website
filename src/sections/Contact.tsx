import { useState } from "react";
import toast from "react-hot-toast";
import { useSupabaseClient } from "../providers/SupabaseProvider";

function Contact () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const supabaseClient = useSupabaseClient();

    const onSubmit = async (event: any) => {
        event.preventDefault();
        
        if (!email || !message) {
            toast.error("You are missing a required field!");
            return;
        }

        const { data, error } = await supabaseClient
            .from("form_data")
            .insert([{name, email, message}])
            .select("*")
            

        if (error) {
            toast.error(error);
            return;
        }

        if (data) {
            toast.success("Form Submitted!")
            return;
        }
    }

    return ([
        <div id="contact"/>,
        <div className="w-[20rem] md:w-[67rem] mb-16 md:h-3/4 mx-auto md:flex justify-between mt-10 sm:mt-36">

            <div className="inline font-inter font-bold">
                <h1 className="text-5xl md:text-7xl text-center tracking-tight md:text-left">Contact Us</h1>
                <p className="font-medium text-center md:text-left mt-5 md:mt-10 text-xl md:text-2xl leading-tight">
                    <span className="block">Wether you have a suggestion</span>
                    <span className="block">or want to give feedack</span>
                    <span>we're here to listen</span>
                </p>
            </div>

            <div className="w-full md:w-1/2 flex top-0 mt-8 md:mt-2">
                <form onSubmit={onSubmit} id="rustbyte-contact" className="flex flex-col gap-2 w-full">
                    <input onChange={(event) => setName(event.target.value)} type="text" name="name" placeholder="Name" className="p-2 border-2 border-gray-400 dark:border-[#353535] dark:bg-[#0A0A0A] bg-white rounded-lg" value={name}/>
                    <input onChange={(event) => setEmail(event.target.value)} type="text" name="email" placeholder="Email" className="p-2 border-2 border-gray-400 dark:border-[#353535] dark:bg-[#0A0A0A] bg-white rounded-lg" value={email}/>
                    <textarea onChange={(event) => setMessage(event.target.value)} name="message" placeholder="Leave a message!" className="h-2/3 p-2 border-2 border-gray-400 dark:border-[#353535] dark:bg-[#0A0A0A] bg-white rounded-lg" value={message}></textarea>
                    <button type="submit" className="rounded-md md:w-1/4 px-9 py-4 font-normal bg-black dark:bg-white text-white dark:text-black">Submit</button>
                </form>
            </div>
        </div>
    ]);
};
export default Contact;