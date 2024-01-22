import Image from "next/image";
import { Form } from "./components/Input";

export default function Home() {
  return (
    <div className="section min-h-screen">
      <div className="container flex flex-col w-full items-center justify-center ">
        <h1>CRUD PROJECT</h1>
        <div className="flex flex-col items-center justify-center flex-wrap w-full gap-5">
          <h2>Perform basic curd operation here</h2>
          <Form />
        </div>
      </div>
    </div>
  );
}
