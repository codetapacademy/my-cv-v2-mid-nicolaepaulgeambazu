import React , {useState}from "react";
import { Box, SkillColor, SkillN, Titlu, ProjectStats, Icon, Styled,ButtonBlue,Buttons,ButtonExpand, WrapperProjects} from "./open.styled";

const AcordeonData = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen((orice)=>!orice);
  };
  return (
    <>
    <Box>
      <Titlu>{project.projectName}</Titlu>
      {project?.skillsGained.map((skills) => {
        return (
        <SkillN>
         <span>{skills.skillName}</span>
          </SkillN>
        )
        
      }
 
      )}
    </Box>
    <WrapperProjects isOpen={isOpen}>
      
       <Styled>
        {project.skillsGained.map(({ skillName, percentage, color }) => {
          return (
            <>
            <SkillN>{skillName}</SkillN>;
            <SkillColor color={color}><span>{percentage}</span></SkillColor>
            </>
          ) 
        })}
      </Styled> 
   <ProjectStats>
    {project.projectStats.map((j) => {
            return (
              <div>
                <Icon icon={j.projectStatIcon} size="20" color="grey" />
                {j.projectStatInfo}
              </div>
            );
          })}
    </ProjectStats>
    <ProjectStats>{project.projectInfo}</ProjectStats>
        <ProjectStats>
          <ButtonBlue href={project.projectLink.link} target="_blank">
            <Icon icon={project.projectLink.icon} size="20" color="white" />
            {project.projectLink.description}
          </ButtonBlue>
        </ProjectStats>
    </WrapperProjects>
        <Buttons>
        <ButtonExpand onClick={toggleButton}>
          <Icon
            icon={project.projectIcon.mandatoryIcon}
            size="20"
            color="white"
          />
        </ButtonExpand>
        {project.projectIcon.extraIcon.map((item) => {
          return (
            <ButtonExpand href={item.link} target="_blank">
              <Icon icon={item.icon} color="white" size="20" />
            </ButtonExpand>
          );
        })}
      </Buttons>
    </>
  );
};

export default AcordeonData;
