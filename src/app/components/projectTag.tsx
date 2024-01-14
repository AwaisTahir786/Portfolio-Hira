import React from 'react'


type projectTagTypes = {
    name:string;
    onClick:any;
    isSelected: boolean
}
function ProjectTag({name , onClick , isSelected}:projectTagTypes) {

    const buttonStyles = isSelected ?  "border-primary text-white " : "text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <button className={`${buttonStyles} border-2 ml-2 text-xl rounded-full py-3 px-6 mb-3 hover:border-white`}
    
    onClick={() => onClick(name)}
    >{name}</button>

    )
}

export default ProjectTag;