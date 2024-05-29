import Left from "../_components/left";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaArrowLeft } from "react-icons/fa";

const Login = () => {
    return (
      <div>
        <Left />
        <div className="split right">
          <div className="flex">
            <FaArrowLeft className="text-primary ml-16 mt-1" />
            <Link href={"/"}>
              <p className="mx-3 hover:underline hover:decoration-secondary cursor-pointer">
                Atpakal uz sakumlapu
              </p>
            </Link>
          </div>
          <p className="text-primary text-5xl font-semibold tracking-wide mx-16 mt-16">
            Pieslegties
          </p>
          <p className="text-gray-600 tracking-wide mx-16 mt-6 lowercase">
            kimijas laboratorijas uzskaites sistemai
          </p>
          <div className="grid w-full max-w-sm items-center gap-1.5 mx-16 mt-12">
            <Label htmlFor="username">Lietotajvards</Label>
            <Input
              type="email"
              id="email"
              placeholder="ievadit Lietotajvardu"
            />
            <Label htmlFor="password" className="mt-2">
              Parole
            </Label>
            <Input type="password" id="password" placeholder="ievadit parole" />
          </div>
          <div className="mt-8">
            <Link href={"login"}>
              <Button variant={"default"} className="ml-16">
                Pieslegties
              </Button>
            </Link>
          </div>
          <div>
            <Button
              variant={"destructive"}
              className="absolute bottom-0 right-0 m-10"
            >
              zinot par kludu
            </Button>
          </div>
          <div className="ml-16 pt-5">
            <p>
              Neesi voi registrets?{" "}
              <span className="text-primary font-medium cursor-pointer">
                Izveidot profilu
              </span>
            </p>
          </div>
        </div>
      </div>
    );
}
 
export default Login;