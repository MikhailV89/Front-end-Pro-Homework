'use strict';
const createCandidate = function (name, skills = []) {
   const candidate = {
     name,
     skills,
   };
   return candidate;
 };
 
 const requirements = [];
 const addRequirement = function (requirement) {
   requirements.push(requirement);
   return requirements;
 };
 
 addRequirement('CSS');
 addRequirement('Punctual');
 addRequirement('Responsible');
 addRequirement('Javascript');
 addRequirement('Java');

 const candidate1 = createCandidate('Oleg', [
   'CSS',
   'Responsible',
   'Javascript',
   'Java',
 ]);
 
 const candidate2 = createCandidate('Alice', [
   'CSS',
   'Punctual',
   'Responsible',
   'Javascript',
   'Java',
 ]);
 
 const candidate3 = createCandidate('Hanz', [
   'Punctual',
   'CSS',
   'Javascript',
 ]);
 
 const candidates = [candidate1, candidate2, candidate3];
 const gradedCandidates = [];
 
 const interview = function (candidate, requirement) {
   const allSkills = requirement.every((skill) => candidate.skills.includes(skill));
   return allSkills;
 };
 console.log(interview(candidate1, requirements));
 
 const gradingFunction = function (candidate, requirements) {
   let score = 0;
   for (const requirement of requirements) {
     if (candidate.skills.includes(requirement)) score += 1;
   }
   return (score / requirements.length) * 100;
 };
 
 const interview2 = function (candidates, requirements, grade) {
   let score = 0;
   for (const candidate of candidates) {
     score = grade(candidate, requirements);
     gradedCandidates.push({ candidate, score });
   }
   return gradedCandidates.sort((a, b) => b.score - a.score);
 };
 
 console.log(interview2(candidates, requirements, gradingFunction));
   