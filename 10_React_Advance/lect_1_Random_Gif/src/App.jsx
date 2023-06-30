import Random from "./components/Random";
import Tag from "./components/Tag";
 
export default function App() {
  return (
    <div className="w-full  flex flex-col background relative items-center p-6 mb-10 gap-5">
    <h1 className=" bg-white rounded-sm  text-center mt-[40px] px-10 
    text-4xl font-bold absolute w-11/12 p-2 ">RANDOM GIFS</h1>
    <div className=" w-full flex  justify-center items-center mt-[8rem]  gap-5">
      <Random/>
      <Tag/>
    </div>

    </div>
  )
}
