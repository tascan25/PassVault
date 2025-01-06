import { useContext } from "react";
import { WebDataContext } from "../Store";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import { FaCopy } from "react-icons/fa6";
import { toast } from "react-toastify";
// eslint-disable-next-line react/prop-types
const PasswordComp = ({ handelEdit }) => {
    const { data, onDeleteEntry } = useContext(WebDataContext);

    const handelCopy = (text,message)=>{
            navigator.clipboard.writeText(text)
            .then(()=>{
                toast.success(`${message} copied to clipboard`,{
                    position:"top-right"
                })
            })
            .catch((err)=>{
                toast.error(`failed to copy to clipboard ${err}`,{
                    position:"top-right"
                })
            })
    }

    return (
        <div className="flex flex-col gap-3 w-[90vw] md:w-[60vw] mt-5">
            <div className="w-full p-2 rounded-lg">
                <h2 className="text-zinc-700 font-medium font-fontPoppins text-sm md:text-xl">
                    Your Passwords
                </h2>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="w-full table-auto border border-gray-100">
                    <thead className="bg-gradient-to-r from-green-300 to-green-50">
                        <tr>
                            <th className="p-2 text-center font-fontPoppins font-normal text-xs md:text-lg">Website</th>
                            <th className="p-2 text-center font-fontPoppins font-normal text-xs md:text-lg">Username</th>
                            <th className="p-2 text-center font-fontPoppins font-normal text-xs md:text-lg">Password</th>
                            <th className="p-2 text-center font-fontPoppins font-normal text-xs md:text-lg">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="text-slate-500 text-sm font-fontPoppins text-center p-4"
                                >
                                    Nothing to show here
                                </td>
                            </tr>
                        ) : (
                            data.map((item, index) => (
                                <tr key={index} className="odd:bg-green-50
                                 even:bg-green-100">
                                    <td className="p-2 text-center font-fontPoppins md:text-xs text-sm">
                                        <div className="flex justify-center items-center gap-2">
                                            {item.URL}
                                            <FaCopy className="cursor-pointer" 
                                            onClick={()=>handelCopy(item.URL,"url")}/>
                                        </div>
                                    </td>
                                    <td className="p-2 text-center font-fontPoppins md:text-xs text-sm ">
                                        <div className="flex justify-center items-center gap-2">
                                            {item.UserName}
                                            <FaCopy className="cursor-pointer"
                                            onClick={()=>handelCopy(item.UserName,"username")} />
                                        </div>
                                    </td>
                                    <td className="p-2 text-center font-fontPoppins md:text-xs text-sm ">
                                        <div className="flex justify-center items-center gap-2">
                                            {item.PassWord}
                                            <FaCopy className="cursor-pointer" 
                                            onClick={()=>handelCopy(item.PassWord,"password")} />
                                        </div>
                                    </td>
                                    <td className="p-2 text-center font-fontPoppins text-sm">
                                        {/* Add action buttons or icons here */}
                                        <div className=" flex justify-center items-center gap-2 w-full">
                                            <RiEdit2Fill size={25} className="cursor-pointer"
                                                onClick={() => handelEdit(item.id)} />
                                            <MdDeleteSweep size={25} className="cursor-pointer "
                                                onClick={() => onDeleteEntry(item.id)} />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PasswordComp;