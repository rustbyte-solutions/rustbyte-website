import { Toaster } from "react-hot-toast"

/*  In the future this file can be used 
    to pass in props for different kinds of toasts 
    if needed */

const ToasterProvider = () => {
    return ([
        <div className="block sm:hidden">
            <Toaster position="top-center"/>            
        </div>,

        <div className="hidden sm:block">
            <Toaster position="top-right"/>
        </div>
    ])
}

export default ToasterProvider;