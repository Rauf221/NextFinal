export default function HomePageMainContext() {
  return (
    <>
      <div className="container w-full  h-[600px]  flex gap-5">
        <div className="w-[50%]  h-[100%] bg-[url('https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2018/10/banner-1-opt.jpg')]  bg-cover">
          <div className="flex flex-col p-8">
            <span className="text-[#79b38a] font-bold ">
              MATTIS LAOREET SAPIEN
            </span>
            <span className="text-5xl w-[200px] lora font-light mt-5">
              Porta Consectetur Imperdiet Frigilla
            </span>
            <span className="text-sm font-bold mt-5 flex flex-col">
              READ MORE
              <span className="h-[1px] w-[14%] bg-[#79b38a]"></span>
            </span>
          </div>
        </div>
        <div className=" w-[50%] h-[100%]  flex flex-col gap-5">
          <div className="w-[100%] h-[50%] bg-[url('https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2018/10/finaly-banner-handmade-9-opt.jpg')]  bg-cover">
            <div className="flex flex-col p-8">
              <span className="text-[#79b38a] font-bold ">SEMPER</span>
              <span className="text-2xl w-[200px] lora font-medium mt-3">
                Feugiat Scelerisque Imperdiet
              </span>
              <span className="text-xs font-bold mt-3 flex flex-col">
                READ MORE
                <span className="h-[2px] w-[14%] bg-[#79b38a]"></span>
              </span>
            </div>
          </div>
          <div className="flex  w-[100%] h-[50%] gap-5">
            <div className="w-[60%] h-[100%] bg-[url('https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2018/10/finaly-banner-handmade-7-opt.jpg')]  bg-cover">
            <div className="flex flex-col p-8">
              <span className="text-[#79b38a] font-bold ">SEMPER</span>
              <span className="text-2xl w-[200px] lora font-medium mt-3">
              Adipiscing
              Sodales
              </span>
              <span className="text-xs font-bold mt-3 flex flex-col">
                READ MORE
                <span className="h-[2px] w-[27%] bg-[#79b38a]"></span>
              </span>
            </div>
            </div>
            <div className="w-[40%] h-[100%] bg-[url('https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2018/10/finaly-banner-handmade-8-opt.jpg')]  bg-cover"></div>
          </div>
        </div>
      </div>
    </>
  );
}
