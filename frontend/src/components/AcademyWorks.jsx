import React from "react";
import { BookOpen, Landmark, BarChart } from "lucide-react";

const features = [
  {
    icon: <BookOpen size={40} className="text-pink-500" />, // Personalized Learning
    title: "Personalized learning",
    description:
      "Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.",
  },
  {
    icon: <Landmark size={40} className="text-green-600" />, // Trusted Content
    title: "Trusted content",
    description:
      "Created by experts, Khan Academy’s library of trusted, standards-aligned practice and lessons covers math K-12 through early college, grammar, science, history, SAT®, and more. It’s all free for learners and teachers.",
  },
  {
    icon: <BarChart size={40} className="text-orange-500" />, // Empowering Teachers
    title: "Tools to empower teachers",
    description:
      "With Khan Academy, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.",
  },
];

const KhanAcademy = () => {
  return (
    <section className="bg-white-100 py-12 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Why Khan Academy works</h2>
        <div className="grid grid-cols-1 ml-10 mr-10 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg  flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KhanAcademy;
