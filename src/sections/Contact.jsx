import { useState } from "react";

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(name);
        console.log(email);
        console.log(message);
    }

    return ([
        <div id="contact"/>,
        <div class="w-[20rem] md:w-[67rem] mb-16 md:h-3/4 mx-auto md:flex justify-between mt-10 sm:mt-36">

            <div class="inline font-inter font-bold">
                <h1 class="text-5xl md:text-7xl text-center tracking-tight md:text-left">Contact Us</h1>
                <p class="font-medium text-center md:text-left mt-5 md:mt-10 text-xl md:text-2xl leading-tight">
                    <span class="block">Wether you have a suggestion</span>
                    <span class="block">or want to give feedack</span>
                    <span>we're here to listen</span>
                </p>
            </div>

            <div class="w-full md:w-1/2 flex top-0 mt-8 md:mt-2">
                <form onSubmit={onSubmit} id="rustbyte-contact" class="flex flex-col gap-2 w-full">
                    <input onChange={(event) => setName(event.target.value)} type="text" name="name" placeholder="Name" class="p-2 border-2 border-gray-400 dark:border-[#353535] dark:bg-[#0A0A0A] bg-white rounded-lg" value={name}/>
                    <input onChange={(event) => setEmail(event.target.value)} type="text" name="email" placeholder="Email" class="p-2 border-2 border-gray-400 dark:border-[#353535] dark:bg-[#0A0A0A] bg-white rounded-lg" value={email}  required />
                    <textarea onChange={(event) => setMessage(event.target.value)} name="message" placeholder="Leave a message!" class="h-2/3 p-2 border-2 border-gray-400 dark:border-[#353535] dark:bg-[#0A0A0A] bg-white rounded-lg" value={message}  required></textarea>
                    <button type="submit" class="rounded-md md:w-1/4 px-9 py-4 font-normal bg-black dark:bg-white text-white dark:text-black">Submit</button>
                </form>
            </div>
        </div>
    ]);
};
export default Contact;