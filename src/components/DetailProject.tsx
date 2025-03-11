"use client";

import aiSample1 from "@/../public/ai-demo-1.jpg";
import aiSample2 from "@/../public/ai-demo-2.jpg";
import aiSample3 from "@/../public/ai-demo-3.jpg";
import aiSample4 from "@/../public/ai-demo-4.jpg";
import { CODE_PROJECT } from "@/constant/common";
import Image from "next/image";

type DetailProjectProps = {
  slug: string;
};

const styleSection = "w-full text-center text-4xl font-bold bg-blue-500 text-white py-8 px-16";
const styleBtn = "cursor-pointer h-fit px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"

const DetailProject = ({ slug }: DetailProjectProps) => {

  const renderProjectName = () => {
    if (slug === CODE_PROJECT.SMART_DOC) return "Smart Doc";
    if (slug === CODE_PROJECT.C_CODE) return "C Codex";
    if (slug === CODE_PROJECT.OCR) return "OCR Platform";
    if (slug === CODE_PROJECT.HR_CHATBOT) return "HR Chatbot";
    return "";
  }

  const nameProject = renderProjectName();

  return (
    <div className="flex flex-col items-center gap-5">
      <div className={`${styleSection}`}>
        <span>{nameProject}</span>
      </div>
      <div className={`${styleSection} flex justify-between gap-[30px]`}>
        <div className="w-[550px] text-left">
          <p className="text-3xl">{`${nameProject} can help doing:`}</p>
          <ul className="ml-5 mt-3">
            <li className="text-2xl font-normal list-disc">Automating complex tasks</li>
            <li className="text-2xl font-normal list-disc">Enhancing decision-making</li>
            <li className="text-2xl font-normal list-disc">Improving efficiency and accuracy</li>
          </ul>
        </div>
        <div className="w-full">
          <div className="flex gap-5 mb-5 justify-end">
            <Image
              src={aiSample1}
              alt="AI Sample 1"
              className="w-80 aspect-[1.55] object-cover"
            />
            <Image
              src={aiSample2}
              alt="AI Sample 2"
              className="w-80 aspect-[1.55] object-cover"
            />
          </div>
          <div className="flex gap-5 justify-end">
            <Image
              src={aiSample3}
              alt="AI Sample 3"
              className="w-80 aspect-[1.55] object-cover"
            />
            <Image
              src={aiSample4}
              alt="AI Sample 4"
              className="w-80 aspect-[1.55] object-cover"
            />
          </div>
        </div>
        <div>

        </div>
      </div>
      <div className={`${styleSection} flex justify-between items-center`}>
        <div className="w-[550px] text-left">
          <p className="text-3xl">General</p>
        </div>
        <div className="flex gap-5 justify-center">
          <Image src={aiSample1} alt="AI Sample 1" className="w-80 aspect-[1.55] object-cover" />
          <Image src={aiSample2} alt="AI Sample 2" className="w-80 aspect-[1.55] object-cover" />
        </div>
        <button className={`${styleBtn}`}>
          Try it now
        </button>
      </div>
      <div className={`${styleSection} flex justify-between items-center`}>
        <div className="w-[550px] text-left">
          <p className="text-3xl">Heath Care</p>
          <p className="text-2xl">{`${nameProject} can create virtual doctor`}</p>
        </div>
        <div className="flex gap-5 justify-center">
          <Image src={aiSample1} alt="AI Sample 1" className="w-80 aspect-[1.55] object-cover" />
          <Image src={aiSample2} alt="AI Sample 2" className="w-80 aspect-[1.55] object-cover" />
        </div>
        <button className={`${styleBtn}`}>
          Try it now
        </button>
      </div>
      <div className={`${styleSection} flex justify-between items-center`}>
        <div className="w-[550px] text-left">
          <p className="text-3xl">Manufactoring</p>
          <p className="text-2xl">{`${nameProject} can create virtual doctor`}</p>
        </div>
        <div className="flex gap-5 justify-center">
          <Image src={aiSample1} alt="AI Sample 1" className="w-80 aspect-[1.55] object-cover" />
          <Image src={aiSample2} alt="AI Sample 2" className="w-80 aspect-[1.55] object-cover" />
        </div>
        <button className={`${styleBtn}`}>
          Try it now
        </button>
      </div>
    </div>
  );
}

export default DetailProject;