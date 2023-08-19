import { Toaster } from "react-hot-toast"

/*  In the future this file can be used 
    to pass in props for different kinds of toasts 
    if needed */

const DarkToast = () => {
    return (
        <Toaster
            position="top-right"
            toastOptions={{
                style: {
                    background: "#242522",
                    color: "#8d8797",
                }
            }}
        />
    )
}

export default DarkToast;