import React from 'react'

const StatsPage = () => {
  return (
   
   

 
    <>

    
      <div className="self-center bg-purple-600 w-[451px] max-w-full mt-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[69%] max-md:w-full">
            <div className="flex flex-col max-md:mt-12">
              <div className="bg-zinc-100 flex w-[259px] max-w-full flex-col px-5 py-3.5 rounded-sm">
                <div className="flex w-[175px] max-w-full items-start justify-between gap-5 mr-0.5 -mt-px">
                  <div className="text-neutral-400 text-xs font-medium self-stretch">
                    Source
                  </div>
                  <div className="text-neutral-400 text-xs font-medium self-stretch w-[104px]">
                    Traffic source %
                  </div>
                </div>
              </div>
              <div className="flex w-[204px] max-w-full items-start justify-between gap-5 mt-3">
                <a
                  href="#"
                  className="self-stretch flex items-start justify-between gap-3.5 max-md:justify-center"
                >
                  <div className="bg-red-400 self-stretch flex w-[27px] h-[21px] flex-col grow shrink-0 basis-auto rounded-sm" />
                  <div className="text-black text-xs self-center my-auto">1</div>
                  <div className="text-black text-xs self-center my-auto">
                    Direct
                  </div>
                </a>
                <div className="text-black text-xs font-medium self-center my-auto">
                  55
                </div>
              </div>
              <div className="flex w-[203px] max-w-full items-start justify-between gap-5 mt-2">
                <a
                  href="#"
                  className="self-stretch flex items-start justify-between gap-3 max-md:justify-center"
                >
                  <div className="bg-pink-400 self-stretch flex w-[27px] h-[21px] flex-col grow shrink-0 basis-auto rounded-sm" />
                  <div className="text-black text-xs self-center my-auto">2</div>
                  <div className="text-black text-xs self-center my-auto">
                    Search
                  </div>
                </a>
                <div className="text-black text-xs font-medium self-center my-auto">
                  35
                </div>
              </div>
              <div className="flex w-[203px] max-w-full items-start justify-between gap-5 mt-1.5">
                <a
                  href="#"
                  className="self-stretch flex items-start justify-between gap-3 max-md:justify-center"
                >
                  <div className="bg-green-600 self-stretch flex w-[27px] h-[21px] flex-col grow shrink-0 basis-auto rounded-sm" />
                  <div className="text-black text-xs self-center my-auto">3</div>
                  <div className="text-black text-xs self-center my-auto">
                    Social
                  </div>
                </a>
                <div className="text-black text-xs font-medium self-center my-auto">
                  10
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full">
          
          </div>
        </div>
      </div>
   
    </>
  )
}

export default StatsPage