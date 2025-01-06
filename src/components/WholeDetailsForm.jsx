import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { WebDataContext } from "../Store";
import PasswordComp from "./PassWordsComp";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const WholeDetailsForm = () => {
    const { placeData, data, updateData } = useContext(WebDataContext);
    const [isPasswordEdit, setIsPasswordEdit] = useState(false)
    const [isEdit, setisEdit] = useState(null)
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (isEdit) {
            updateData(isEdit, data)
            setisEdit(null)
        }
        else {
            const newData = { id: Date.now().toString(), ...data };
            placeData(newData);
            toast.success("Record submitted sucessfuly!", {
                position: "top-right"
            })
        }
        reset()
    };

    const onError = () => {
        toast.error("Errors Detected fix them!", {
            position: "top-right"
        })
    }

    const handelEdit = (id) => {
        const record = data.find((item) => item.id === id)
        if (record) {
            setisEdit(id)
            Object.keys(record).forEach(key => {
                setValue(key, record[key])
            });
        }
    }


    const handelPassword = () => {
        setIsPasswordEdit((prev)=>!prev)
    }
    return (
        <>
            <div className="flex flex-col gap-3 ">
                <form
                    onSubmit={handleSubmit(onSubmit, onError)}
                    className="flex flex-col gap-5 w-full "
                >
                    <div className="flex flex-col gap-1">
                        <input
                            type="text"
                            className="bg-slate-50 outline-none rounded-full w-[100%] px-2 py-1
                            text-xs
                            md:w-full md:px-3 md:py-2 text-zinc-600 md:text-sm
                    border border-green-500"
                            placeholder="Enter website URL"
                            {...register("URL", {
                                required: { value: true, message: "URL is required" },
                                maxLength: {
                                    value: 1000,
                                    message: "URL cannot exceed 1000 characters",
                                },
                                minLength: {
                                    value: 10,
                                    message: "URL must be at least 10 characters",
                                },
                                pattern: {
                                    value:
                                        /^(https?:\/\/)?(www\.)?[a-zA-Z0-9@:%._\+~#?&//=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._\+~#?&//=]*)$/,
                                    message: "Please enter a valid URL",
                                },
                            })}
                        />
                        {errors.URL && (
                            <span className="text-red-400 font-fontPoppins text-sm">
                                {errors.URL.message}
                            </span>
                        )}
                    </div>

                    <div className="flex justify-around gap-2 md:gap-4">
                        <div className="flex flex-col gap-1 w-[65%] md:w-[70%] ">
                            <input
                                type="text"
                                className="bg-slate-50 outline-none text-zinc-600 rounded-full  px-2 py-1 text-[12px]
                                md:px-3 md:py-2 md:text-sm
                        border border-green-500"
                                placeholder="Enter username"
                                {...register("UserName", {
                                    required: { value: true, message: "Username is required" },
                                    maxLength: {
                                        value: 100,
                                        message: "Value cannot be greater than 100",
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "Value cannot be less than 10",
                                    },
                                })}
                            />
                            {errors.UserName && (
                                <span className="text-red-400 font-fontPoppins text-sm">
                                    {errors.UserName.message}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1 w-[35%] md:w-[30%] relative">
                            <input
                                type={isPasswordEdit?"text":"password"}
                                className="bg-slate-50 outline-none text-zinc-600 rounded-full  px-2 py-1 text-[12px]
                                md:px-3 md:py-2 md:text-sm
                        border border-green-500"
                                placeholder="password"
                                {...register("PassWord", {
                                    required: { value: true, message: "Password is required" },
                                    maxLength: {
                                        value: 200,
                                        message: "Password cannot exceed 200 characters",
                                    },
                                    minLength: {
                                        value: 10,
                                        message:
                                            "Password must be at least 10 characters long. Please create a stronger password.",
                                    },
                                })}
                            />

                            {isPasswordEdit ? <IoIosEyeOff
                                className="absolute right-1 top-1 md:right-2 md:top-3 cursor-pointer " size={20} onClick={handelPassword}/>
                                :
                                <IoIosEye className="absolute right-1 top-1 md:right-2 md:top-3 cursor-pointer " size={20}  onClick={handelPassword}/>}
                            {errors.PassWord && (
                                <span className="text-red-400 font-fontPoppins text-sm">
                                    {errors.PassWord.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-green-300 rounded-md px-2 py-1 w-24  text-slate-800 text-center self-center
                flex gap-2 items-center mt-2"
                    >
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                            colors="primary:#242424"
                        ></lord-icon>
                        <span className="font-fontPoppins font-medium text-xs md:text-base">{isEdit ? "Update" : "Save"}</span>
                    </button>
                </form>
                <PasswordComp handelEdit={handelEdit} />
            </div>
        </>

    );
};

export default WholeDetailsForm;
