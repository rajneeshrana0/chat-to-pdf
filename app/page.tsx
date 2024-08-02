/* eslint-disable react/jsx-key */
import { Button } from "@/components/ui/button";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";

const features = [
  {
    name: "Store you PDF Document",
    description:
      "Keep all Your important pdf files securely stored and easily accesiable anytime,anywhere.",
    icon: GlobeIcon,
  },

  {
    name: "Blazing Fast Response",
    description:
      "Keep all Your important pdf files securely stored and easily accesiable anytime,anywhere.",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorization",
    description:
      "Keep all Your important pdf files securely stored and easily accesiable anytime,anywhere.",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive Pdf Viewer",
    description:
      "Keep all Your important pdf files securely stored and easily accesiable anytime,anywhere.",
    icon: EyeIcon,
  },
  {
    name: "Cloud Backup",
    description:
      "Keep all Your important pdf files securely stored and easily accesiable anytime,anywhere.",
    icon: ServerCogIcon,
  },
  {
    name: "Responsive Across Web",
    description:
      "Keep all Your important pdf files securely stored and easily accesiable anytime,anywhere.",
    icon: MonitorIcon,
  },
];

export default function Home() {
  return (
    <main className=" flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center m-auto max-w-7xl  px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold text-indigo-600">
              Your Interactive Document Companion
            </h2>

            <p className="mt-2 text-3xl font-bold tracking-tight text-grey-900 sm:text-6xl">
              Transform Your PDF inot Interactive Conversation
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600">Chat With Pdf</span>
              <br />
              <br /> Upload Your Document,and our chatbo₮will answer questions,
              summarize content, and answer all your Qs, Ideal for everyone,{" "}
              <span className="text-indigo-600">Chat With Pdf </span> turn
              static documents into{" "}
              <span className="font-bold">dynamic conversations</span>, enhance
              productivity 10x fold efffortlessy.
            </p>
          </div>

          <Button asChild className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>

        {/* SEcon SEction  */}

        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl  px-6 lg:px-8">
            <Image
              alt="App Screenshot"
              src="https://i.imgur.com/VciRSTI.jpeg"
              width={2432}
              height={1442}
              className="mb-[0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div area-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-700 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                </dt>
                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
