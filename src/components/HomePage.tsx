"use client";

import Image from "next/image";
import chipImage from "@/../public/chip.png";
import bgMapImage from "@/../public/bg-map.webp";
import Link from "next/link";
import { CODE_PROJECT } from "@/constant/common";

interface Project {
  id: string;
  name: string;
  code: string;
}

const styleBox = "absolute hover:mt-[-10px] cursor-pointer min-w-[200px] bg-white rounded-xl p-6 border border-gray-300 text-lg font-semibold transition-all duration-500 ease-in-out shadow-lg hover:shadow-blue-500/50 text-center"

export default function HomePage() {
  const projectList: Project[] = [
    { id: "1", name: "Smart Doc", code: "Smart_Doc" },
    { id: "2", name: "C Codex", code: "C_Code" },
    { id: "3", name: "OCR Platform", code: "OCR" },
    { id: "4", name: "HR Chatbot", code: "HR_Chatbot" },
  ];

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bgMapImage.src})` }}
    >
      <div className="relative w-[800px] h-[600px] flex items-center justify-center">
        {/* Chip trung tâm */}
        <Image src={chipImage} alt="Chip" width={400} height={400} />
        {/* Vệ tinh xung quanh */}
        <Link
          href={`${CODE_PROJECT.SMART_DOC}`}
          className={styleBox}
          style={{
            left: 0,
            top: 0,
            animation: `2s infinite ease-in-out alternate`,
          }}
        >
          Smart Doc
        </Link>
        <Link
          href={`${CODE_PROJECT.C_CODE}`}
          className={styleBox}
          style={{
            right: 0,
            top: 0,
            animation: `2s infinite ease-in-out alternate`,
          }}
        >
          C Codex
        </Link>
        <Link
          href={`${CODE_PROJECT.OCR}`}
          className={styleBox}
          style={{
            left: 0,
            bottom: 0,
            animation: `2s infinite ease-in-out alternate`,
          }}
        >
          OCR Platform
        </Link>
        <Link
          href={`${CODE_PROJECT.HR_CHATBOT}`}
          className={styleBox}
          style={{
            right: 0,
            bottom: 0,
            animation: `2s infinite ease-in-out alternate`,
          }}
        >
          HR Chatbot
        </Link>
      </div>

      {/* Thêm hiệu ứng CSS */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
