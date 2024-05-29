import { Button } from "@/components/ui/button";
import Left from "./_components/left";
import Link from "next/link";

const Landing = () => {
  return (
    <div>
      <Left />
      <div className="split right">
        <p className="text-primary text-5xl font-semibold tracking-wide mx-16 mt-16">
          Ko Tu velies darit <br /> sodien?
        </p>
        <p className="text-gray-600 tracking-wide mx-16 mt-6 lowercase">
          Pieklusti savaS SKOLAS LABORATORIJAI VAI APLUKU publiski pieejamo
          informaciju im datus par laboratoriju
        </p>
        <div className="mt-8">
          <Link href={"login"}>
            <Button variant={"default"} className="ml-16">
              Pieslegties
            </Button>
          </Link>
          <Link href={"information"}>
            <Button variant={"outline"} className="ml-5">
              Pieklut publiskiem datiem
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
      </div>
    </div>
  );
};

export default Landing;
