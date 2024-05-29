import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { MdSearch } from "react-icons/md";
import DataTable from "@/components/deadtome";
import Tablee from "./table";


const Information = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <div>
          <div className="flex">
            <FaArrowLeft className="text-primary ml-16 mt-1" />
            <Link href={"/"}>
              <p className="mx-3 hover:underline hover:decoration-secondary cursor-pointer">
                Atpakal uz sakumlapu
              </p>
            </Link>
          </div>
          <p className="text-primary text-5xl font-semibold tracking-wide mx-16 mt-12">
            Publiska datubaze
          </p>
          <p className="text-gray-600 tracking-wide mx-16 mt-6 underline decoration-secondary">
            Saja datubaze tu vari apskatit pieejamas vielas un aprikajumu
          </p>
          <div className="mt-4 mb-3 mx-16 flex">
            <div className="flex items-center rounded-full shadow-md overflow-hidden w-72">
              <MdSearch className="h-5 w-5 text-gray-500 ml-3" />
              <Input
                type="text"
                placeholder="Search..."
                className="rounded-full px-4 py-2 focus:outline-none w-full"
              />
            </div>
            <Button className="ml-4 rounded-xl">Radit visu</Button>
            <Button className="rounded-xl ml-4" variant={"outline"}>
              Radit vielas
            </Button>
            <Button className="rounded-xl ml-4" variant={"outline"}>
              Radit aprikojumu
            </Button>
          </div>
          <div>
            <Button
              variant={"destructive"}
              className="absolute bottom-0 right-0 m-10"
            >
              zinot par kludu
            </Button>
          </div>
        </div>
        <div>
          <Tablee />
        </div>
      </div>
    );
}
 
export default Information;