import * as React from "react";

export default function NotFoundPage() {
  return (
    <main className="bg-white flex flex-col">
      <section className="flex-col overflow-hidden self-stretch relative flex min-h-[780px] w-full px-5 py-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/24857207-4938-4758-a2af-fc3908b23fae?apiKey=ac24b7b348fe4e47ba41eb82948a7b79&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/24857207-4938-4758-a2af-fc3908b23fae?apiKey=ac24b7b348fe4e47ba41eb82948a7b79&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24857207-4938-4758-a2af-fc3908b23fae?apiKey=ac24b7b348fe4e47ba41eb82948a7b79&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/24857207-4938-4758-a2af-fc3908b23fae?apiKey=ac24b7b348fe4e47ba41eb82948a7b79&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/24857207-4938-4758-a2af-fc3908b23fae?apiKey=ac24b7b348fe4e47ba41eb82948a7b79&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24857207-4938-4758-a2af-fc3908b23fae?apiKey=ac24b7b348fe4e47ba41eb82948a7b79&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/24857207-4938-4758-a2af-fc3908b23fae?apiKey=ac24b7b348fe4e47ba41eb82948a7b79&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/24857207-4938-4758-a2af-fc3908b23fae?apiKey=ac24b7b348fe4e47ba41eb82948a7b79&"
          className="aspect-[2.36] object-cover object-center w-[927px] overflow-hidden self-center ml-0 max-w-full mt-16"
          alt="Image"
        />

        <h1 className="relative text-blue-950 text-4xl font-extrabold leading-[4.375rem] max-w-[1089px] self-center max-md:max-w-full">
          OOPs,Looks likes something went wrong
        </h1>
        <p className="relative text-slate-500 text-base font-extrabold max-w-[848px] self-center ml-3.5 mt-4 mb-20 max-md:max-w-full">
          This might occur because you might not have entered correct username
          or secret .
        </p>
      </section>
    </main>
  );
}
