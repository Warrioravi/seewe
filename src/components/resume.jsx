import "./resume.css"
let Resume=()=>{
    let user={
        name:"Abhishek kumar",
        summary:"frontend engineer",
        personal_details:["8448948133","github.com/warrioravi","abhisinghraj2k18@gmail.com"],
        skills:["java","c++","node","js","mongodb","node"],
        experience:[{role:"Software engineer",
                       name:"Nagarro",
                       from:"oct-2017",
                       to:"nov-2019",
                       description:"i was the dumbest persobn in a team where others were alos dumb"
                    },
                    {role:"Software engineer",
                       name:"Nagarro",
                       from:"oct-2017",
                       to:"nov-2019",
                       description:"i was the dumbest persobn in a team where others were alos dumb"
                    }
            ],
        education:[{},{},{}]

        
        
    
    }
    return(
        
         <div class="wrapper">
        <div class="header">
            <div class="name">{user.name.toUpperCase()}</div>
            <div class="summary">{user.summary.toUpperCase()}</div>
            <hr/>
            <div class="personal-details">
                {user.personal_details.map((e)=>{
                    return  <div>{e}</div>
                })}
               
            </div>
            <hr/>
        </div>

        {user.skills.length ? ( 
        <div class="section-heading">SKILLS
        <hr width="90%"/>
        </div>
        ) : ""}
        {user.skills.length ? ( 
             <div class="skillset">
           {user.skills.map((e)=>{
                return <div class="skill">{e}</div>
            })}
            </div>
        ) : ""}
        

        {user.experience.length ? ( 
        <div class="section-heading">EXPERIENCE
        <hr width="90%"/>
        </div>
        ) : ""}        
         
        {user.experience.length ?(
             <div class="experience">
                 {user.experience.map((e)=>{
                   return(   <div class="exp">
                
                       <div class="exp-role">{e.role}</div>
                       <div class="exp-details">
                           <div class="compname">{e.name}</div>
                           <div class="timeline">{e.from}-{e.to}</div>
                       </div>
                       <div class="exp-description">{e.description}</div>
                      
                   </div>
                   )
                 })}

             </div>
        ):""}


        


     
        <div class="section-heading">EDUCATION
            <hr width="90%"/>
        </div>
        <div class="education">
            <div class="ed">
                <div class="ed-course">Btech CSE</div>
            <div class="ed-details">
                <div class="college-name">Galgotias university</div>
                <div class="timeline">from-to</div>
            </div>
            <div class="ed-description">i was the dumbest student in the dumbest class</div>
            </div>
            <div class="ed">
                <div class="ed-course">Btech CSE</div>
            <div class="ed-details">
                <div class="college-name">Galgotias university</div>
                <div class="timeline">from-to</div>
            </div>
            <div class="ed-description">i was the dumbest student in the dumbest class</div>
            </div>

        </div>
        <div class="section-heading">PROJECTS
            <hr width="90%"/>
        </div>
        <div class="projects">
            <div class="project">
                <div class="project-details">
                    <div class="project-name">college scrapper</div>
                    <div class="project-link"> <a href=""> Link</a></div>
                </div>
                <div class="project-description">A short description about my project</div>
            </div>
            <div class="project">
                <div class="project-details">
                    <div class="project-name">college scrapper</div>
                    <div class="project-link"> <a href=""> Link</a></div>
                </div>
                <div class="project-description">A short description about my project</div>
            </div>
            <div class="project">
                <div class="project-details">
                    <div class="project-name">college scrapper</div>
                    <div class="project-link"> <a href=""> Link</a></div>
                </div>
                <div class="project-description">A short description about my project</div>
            </div>
            <div class="project">
                <div class="project-details">
                    <div class="project-name">college scrapper</div>
                    <div class="project-link"> <a href=""> Link</a></div>
                </div>
                <div class="project-description">A short description about my project</div>
            </div>
         
            
        </div>
        <div class="section-heading">ACHEIVEMENTS
            <hr width="90%"/>
        </div>
        <div class="acheivements">
            
            <div class="ach">
                <div class="ach-name">hackathon winner :</div><div class="ach-description"> won dexterix 2.0 hackathon in my collge out of 30 teams</div>
            </div>
            <div class="ach">
                <div class="ach-name">hackathon winner :</div><div class="ach-description">won dexterix 2.0 hackathon in my collge out of 30 teams</div>
            </div>
            <div class="ach">
                <div class="ach-name">hackathon winner :</div><div class="ach-description">won dexterix 2.0 hackathon in my collge out of 30 teams</div>
            </div>
            
        </div>
      
    </div>
        
        
        
        
    )
}
export default Resume;