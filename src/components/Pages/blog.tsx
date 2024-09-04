import { GoShareAndroid } from "react-icons/go";
import { HiOutlineChatAlt } from "react-icons/hi";
import { RxDotsHorizontal } from "react-icons/rx";
import '../../styles/globals.css';
export default function BlogMainContext() {
    return (
        <>
            <div className="text-5xl lora w-full flex items-center justify-center py-10 mb-10 bg-slate-100" >
              <h1 className="lora ">BLOG</h1>
            </div>
       <div className="relative h-[1200px] mt-10 container mx-auto" >
        
       <div className="  group h-[420px]  w-[401px]">
                <div className="bg-cover relative overflow-hidden h-[270px] w-[400px] ">
                    <img
                        src="https://woodmart.xtemos.com/handmade/wp-content/uploads/sites/3/2017/06/blog-post-hand-made-4-opt.jpg"
                        className="h-[270px] w-[400px] object-cover transition-transform duration-700 transform group-hover:scale-105"
                        alt=""
                    />
                    <div className="absolute flex justify-center p-0 m-0 items-center text-8xl z-50 inset-0    group-hover:animate-fade-in-left_1s_ease-in-out group-hover:opacity-100 duration-700 delay-100  opacity-0   transition-all text-white"><RxDotsHorizontal /></div>
                    <div className="absolute  inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>
                </div>
                <div className="flex justify-center text-2xl text-center pt-5 px-3">
                    <h1 className="lora">Sweet seat: functional seat for IT folks</h1>
                </div>
                <div className=" flex  justify-center gap-3 text-xl items-center pt-4 ">
                    <div className="flex justify-center text-sm gap-2 text-center  text-[#a8a8a8]  ">
                        Posted by{" "}
                        <div className="text-[#79b38a] rounded-full overflow-hidden">
                            <img
                                src="https://woodmart.xtemos.com/wp-content/uploads/2018/10/avatar-home.jpg.webp "
                                alt=""
                            />
                        </div>
                        S.Rogers
                    </div>
                   
                
                    <div className="relative  text-[#a8a8a8] ">
                        <span className="absolute bottom-[9px] left-3  bg-[#a8a8a8] text-xs flex justify-center items-center  text-white h-4 w-4 rounded-full">
                            0
                        </span>
                        <HiOutlineChatAlt />
                    </div>
                    <div className=" text-[#a8a8a8]">
                        <GoShareAndroid />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                        <span className="text-sm p-5 text-center">
                        Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt ...
                        </span>
                </div>
                <div className="flex justify-center items-center ">
                      <span className="text-[#79b38a] text-sm">CONTINUE READING</span><span className="text-[#79b38a] hover:animate-spin ">...</span>
                </div>
            </div>
            <div className="absolute  left-[150px] top-[257px] ">
                <button className="bg-[#79b38a] text-white   text-center justify-center items-center text-xs lora py-1 px-3 ">
                    HOME DECOR
                </button>
            </div>
            <div className="absolute top-2 left-2   ">
                <div className="bg-white w-[50px] h-[60px] z-50 flex flex-col text-2xl justify-center items-center">
                    14 <br /> <span className=" text-sm">JUN</span>
                </div>
            </div>
       </div>
        </>
    );
}