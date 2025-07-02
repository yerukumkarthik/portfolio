import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    skills: ["C", "C++", "Java", "Python","Dart"]
  },
  {
    category: "Frontend & Mobile",
    skills: ["HTML", "CSS", "JavaScript", "Flutter", "React JS", "Tailwind CSS"]
  },
  {
    category: "Backend & Tools",
    skills: ["Node JS", "Express JS", "PHP", "VS Code", "Sublime Text", "Android Studio"]
  },
  {
    category: "Databases & Cloud",
    skills: ["Firebase", "MongoDB", "MySQL"]
  },
  {
    category: "CS Core Concepts",
    skills: ["DSA", "OOPS", "DBMS", "OS", "Robotic Process Automation"]
  },
  {
    category: "Soft Skills & Domains",
    skills: [
      "Communication",
      "Teamwork",
      "Versatility",
      "Web Dev",
      "App Dev",
      "SDE"
    ]
  }
];


export default function Skills() {
  return (
    <div className="skills-section">
      <h2 className="edu-heading">My Tech Arsenal</h2>
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            className="skills-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="glitch" data-text={group.category}>
              {group.category}
            </h3>
            <div className="skills-badges">
              {group.skills.map((skill, idx) => (
                <span key={idx} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
