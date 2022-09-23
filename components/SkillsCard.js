import React from 'react'

export const SkillsCard = ({skillsTitle, animation, background}) => {
  return (
    <div className="skillsCard border-2 border-gray-600 text-white rounded-full w-20 h-20 flex items-center justify-center">
        <p className={`text-5xl ${animation} ${background}`}>{skillsTitle}</p>
    </div>
  )
}
