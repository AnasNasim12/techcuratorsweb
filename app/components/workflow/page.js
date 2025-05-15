import { Check, ArrowRight } from "lucide-react";

export default function WorkflowStrategy() {
   const steps = [
  {
    title: "Consultation",
    description:
      "We discuss your needs, objectives, and brand voice to align our strategy effectively.",
  },
  {
    title: "Strategy Development",
    description:
      "Our team creates a tailored content strategy to deliver high-quality, engaging content.",
  },
  {
    title: "Content Creation",
    description:
      "We craft compelling content that resonates with your audience and meets business goals.",
  },
  {
    title: "Revision and Approval",
    description:
      "We craft compelling content that resonates with your audience and meets business goals.",
  },
  {
    title: "Delivery",
    description:
      "Final content is delivered on time, ready for publication and audience engagement.",
  },
];


  return (
    <div className="relative">
    {/* Green bar spanning full width */}
    <div className="absolute top-0 left-0 w-screen h-40 bg-[#D9E9DD] -z-10" />
    <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        How do we <span className="text-[#3c6446] font-normal">strategise our workflows?</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md px-6 py-8 flex-1 min-w-[220px] max-w-xs mx-auto"
          >
            <div className="font-semibold text-lg mb-2 text-center">{step.title}</div>
            <div className="text-gray-500 text-sm text-center">{step.description}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
