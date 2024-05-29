import Image from 'next/image';

const Left = () => {
    return (
      <div className="split left bg-gradient-to-t from-secondary to-primary flex flex-col">
        <h1 className="text-white text-center text-3xl font-semibold pt-14 tracking-wider">
          Esi sveicinats <br />
          klus
        </h1>
        <p className="text-white text-center m-10">
          Tavas laboratorijas uzskaites sistema
        </p>
        <div className="items-center justify-center flex mt-6">
          <Image
            src="/assets/atomic.png"
            alt="Logo"
            width={150}
            height={159}
            className=" items-center w-[60%]"
          />
        </div>
      </div>
    );
}
 
export default Left;