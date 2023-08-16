import { Toaster } from "react-hot-toast"

/*  In the future this file can be used 
    to pass in props for different kinds of toasts 
    if needed */

const ToasterProvider = () => {
    return (
        <Toaster position="top-right"/>
    )
}

export default ToasterProvider;