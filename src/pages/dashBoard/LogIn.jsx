import Login from "../../auth/Login";
import SignHeader from "../../components/sign/SignHeader";

const Log = () => {
    return (
        <>
            <SignHeader />
            <div className=' flex justify-center pt-20'>
                <div className="p-4 w-[400px]">
                    <Login />
                </div>
            </div>
        </>
    )
}
export default Log;