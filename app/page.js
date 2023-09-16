import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import ToDoCard from "@/components/ToDoCard";
import ToDoList from "@/components/ToDoList";

export default function Home() {
  return (
    <main className="max-md:min-h-screen max-md:flex max-md:justify-center max-md:items-center">
      <div className="min-h-[95vh] mt-[5vh] flex w-full max-md:hidden">
        <SideBar />
        <section className="p-3 w-full flex flex-col">
          <Header />
          <div className="flex h-full mt-7">
            <div className="w-[50%] p-3">
              <h2 className="bg-slate-gray p-3  text-center text-lime-200 text-3xl shadow-2xl shadow-slate-500 rounded-sm">
                Pending ToDOs
              </h2>
              <ToDoList completed={false} />
            </div>
            <div className="w-[50%] p-3">
              <h2 className=" bg-lime-200 p-3 text-center text-slate-gray text-3xl shadow-2xl shadow-slate-500 rounded-sm">
                Completed ToDOs
              </h2>
              <ToDoList completed={true} />
            </div>
          </div>
        </section>
      </div>
      <div className="text-2xl p-36 text-justify">
        This App is not suitable for mobile view. Please swicth to desktop view.
      </div>
    </main>
  );
}
