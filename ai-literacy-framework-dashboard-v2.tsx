import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AILiteracyDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const problems = [
    { name: 'Lack of Understanding', value: 85 },
    { name: 'Misuse of AI Tools', value: 70 },
    { name: 'Banning without Understanding', value: 60 },
    { name: 'Academic Integrity Concerns', value: 90 },
    { name: 'Overreliance on AI', value: 75 },
    { name: 'Ethical Implications', value: 80 },
    { name: 'Bias in AI Systems', value: 85 },
    { name: 'Lack of Critical Evaluation', value: 75 },
  ];

  const literacyComponents = [
    { name: 'Functional AI Literacy', value: 4 },
    { name: 'Critical AI Literacy', value: 4 },
    { name: 'Rhetorical AI Literacy', value: 5 },
  ];

  const Card = ({ title, content }) => (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );

  const TabContent = ({ children, index }) => (
    <div className={`tab-content ${activeTab === index ? 'block' : 'hidden'}`}>
      {children}
    </div>
  );

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Literacy Framework Dashboard</h1>
      
      <div className="mb-4">
        <button 
          className={`py-2 px-4 mr-2 ${activeTab === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab(0)}
        >
          Problems Identified
        </button>
        <button 
          className={`py-2 px-4 mr-2 ${activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab(1)}
        >
          Need for AI Literacy
        </button>
        <button 
          className={`py-2 px-4 ${activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab(2)}
        >
          AI Literacy Framework
        </button>
      </div>

      <TabContent index={0}>
        <h2 className="text-2xl font-semibold mb-4">Problems Identified in Higher Education</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={problems} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={150} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" name="Severity (%)" />
          </BarChart>
        </ResponsiveContainer>
      </TabContent>

      <TabContent index={1}>
        <h2 className="text-2xl font-semibold mb-4">The Need for AI Literacy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            title="Comprehension of AI Systems"
            content="Understanding AI capabilities, limitations, and ethical considerations."
          />
          <Card
            title="Informed Decision Making"
            content="Making knowledgeable choices about AI use in academic contexts."
          />
          <Card
            title="Ethical Interaction"
            content="Developing skills to interact with AI technologies ethically and responsibly."
          />
          <Card
            title="Preparation for AI-Infused Workforce"
            content="Equipping students for a future where AI is integral to many professions."
          />
        </div>
      </TabContent>

      <TabContent index={2}>
        <h2 className="text-2xl font-semibold mb-4">AI Literacy Framework Components</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={literacyComponents} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" name="Number of Key Competencies" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            title="Functional AI Literacy"
            content="Understanding core AI mechanisms, capabilities, limitations, and effective interaction with AI interfaces."
          />
          <Card
            title="Critical AI Literacy"
            content="Evaluating AI credibility, recognizing biases, mitigating issues, and considering ethical implications."
          />
          <Card
            title="Rhetorical AI Literacy"
            content="Analyzing AI-generated content, understanding AI's role in communication, and collaborating effectively with AI tools."
          />
        </div>
      </TabContent>
    </div>
  );
};

export default AILiteracyDashboard;
