import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const subjects = [
  { title: "Math (NCERT)", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png", classes: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6 (2024)", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "Board Prep Class 10", "Board Prep Class 12"] },
  { title: "Math (NCERT) Revision", icon: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png", classes: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 11"] },
  { title: "Math Foundations", icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png", classes: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"] },
  { title: "Science (NCERT)", icon: "https://cdn-icons-png.flaticon.com/512/2942/2942711.png", classes: ["NCERT (Hinglish)", "Class 9 Phy", "Class 9 Chem", "Class 9 Bio", "Class 10 Phy", "Class 10 Chem", "Class 10 Bio", "Class 11 Phy", "Class 11 Chem", "Class 11 Bio", "Class 12 Phy", "Class 12 Chem", "Class 12 Bio", "Board preparation Class 10", "Board preparation Class 12 Physics", "Board preparation Class 12 Biology", "Board preparation Class 12 Chemistry"] },
  { title: "All State Boards", icon: "https://cdn-icons-png.flaticon.com/512/2919/2919600.png", classes: ["Punjab", "Uttar Pradesh", "Maharashtra", "Assam", "Odisha"] }
];

const ExploreSection = ({ searchTerm }) => {
  const [expanded, setExpanded] = useState({});

  // Function to toggle dropdowns
  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // **Filtering Logic**
  const filteredSubjects = subjects
    .map((subject) => {
      // Filter classes inside each subject
      const filteredClasses = subject.classes.filter((cls) =>
        cls.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Return subjects that match or have filtered classes
      if (
        subject.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        filteredClasses.length > 0
      ) {
        return { ...subject, classes: filteredClasses };
      }
      return null;
    })
    .filter((subject) => subject !== null); // Remove null values

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* No Results Found */}
        {filteredSubjects.length === 0 ? (
          <p className="text-gray-500 text-center">No results found.</p>
        ) : (
          filteredSubjects.map((subject, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(index)}>
                <div className="flex items-center space-x-3">
                  <img src={subject.icon} alt="subject-icon" className="w-8 h-8" />
                  <h2 className="text-lg font-semibold">{subject.title}</h2>
                </div>
                {expanded[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>

              {/* Filtered Classes */}
              {expanded[index] && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                  {subject.classes.map((className, i) => (
                    <a key={i} href="/" className="flex items-center space-x-2 text-blue-600 hover:underline text-sm md:text-base">
                      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="class-icon" className="w-5 h-5" />
                      <span>{className}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ExploreSection;
