import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
export const WebDataContext = createContext();

// eslint-disable-next-line react/prop-types
function WebDataProvider({ children }) {

  const [data, setData] = useState(() => {
    const newData = localStorage.getItem("data")
    return newData ? JSON.parse(newData) : []
  });

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function onDeleteEntry(id) {
    setData((prev) => prev.filter((item) => item.id !== id))
    toast.success("Record Delete Successfuly!",{
      position:"top-right"
    })
  }

  function placeData(obj) {
    setData((prev) => [...prev, obj]);
  }

  function updateData(id,updatedData){
    setData((prev)=>prev.map((item)=>item.id===id?{...item,...updatedData}:item))
    toast.success("Record update sucessfuly!",{
      position:"top-right"
    })
  }

  return (
    <WebDataContext.Provider value={{ placeData, data, onDeleteEntry,updateData }}>
      {children}
    </WebDataContext.Provider>
  );
}

export default WebDataProvider;
