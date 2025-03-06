import React from "react";
import ReactMarkdown from "react-markdown";
interface ResumeProps {
  markdownContent: string;
}

const Resume: React.FC<ResumeProps> = ({ markdownContent }) => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg text-gray-700">
      <div className="markdown-container">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>{" "}
    </div>
  );
};

export default Resume;
