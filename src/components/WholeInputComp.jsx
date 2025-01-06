import LogoComp from "./LogoComp";
import WholeDetailsForm from "./WholeDetailsForm";
const WholeInputComp = () => {
  return (
    <div className="flex flex-col justify-center gap-4 items-center mt-5 w-[45vw] md:w-[60vw] p-2">
      <div className="flex flex-col justify-center items-center gap-2">
        {/* <h1 className="text-slate-700 ">Pass Op</h1> */}
        <LogoComp color={"black"}/>
        <span className="text-slate-900 text-[10px] md:text-xs font-fontPoppins">
          Your own Password Manager
        </span>
      </div>
      <WholeDetailsForm/>
     
    </div>
  );
};

export default WholeInputComp;
