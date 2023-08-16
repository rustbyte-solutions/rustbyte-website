import { useState } from "react";
import toast from "react-hot-toast";
import { useSupabaseClient } from "../providers/SupabaseProvider";
import axios from "axios";

const defaultInputClass = "p-2 border-2 rounded-lg outline-none border-secondary-light dark:border-secondary-dark focus:border-accent-light focus:dark:border-accent-dark dark:bg-background-darker bg-white duration-500"

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

        try {
            const response = await axios.get(`https://www.disify.com/api/email/${email}`);
            const isDisposable = response.data.disposable;
            const isFormat = response.data.format;
    
            if (isFormat === false) {
                toast.error("Invalid email format");
                return;
            }

            if (isDisposable === true) {
                toast.error("Invalid email address!");
                return;
            }

        } catch (error: any) {
            toast.error(error);
            return;
        }
        

        const { data, error } = await supabaseClient
            .from("form_data")
            .insert([{name, email, message}])
            .select("*")
            

        if (error) {
            toast.error(String(error));
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
                    <input onChange={(event) => setName(event.target.value)} type="text" name="name" placeholder="Name" value={name} className={defaultInputClass}/>
                    <input onChange={(event) => setEmail(event.target.value)} type="text" name="email" placeholder="Email" value={email} className={defaultInputClass}/>
                    <textarea onChange={(event) => setMessage(event.target.value)} name="message" placeholder="Leave a message!" value={message} className={`${defaultInputClass} h-2/3`}/>

                    <button type="submit" className="rounded-md md:w-1/4 px-9 py-4 font-medium bg-primary text-black">Submit</button>
                </form>
            </div>
        </div>
    ]);
};

export default Contact;