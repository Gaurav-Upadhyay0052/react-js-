import { useState  } from "react";

const Section = ({title, description,isVisible,setIsVisible}) => {
   
    return(
        <div>
            <h3>{title} </h3>
            {isVisible ? (
                <button onClick={() => setIsVisible(false)}>
              Hide
                </button>
                   
            ) : (
        
           <button onClick={() => setIsVisible(true)}>
           Show
           </button>
          
           ) }
           {isVisible && <p>{description}</p>} 
        </div>
    );
};

const InstaMart = () => {
    const [visibleSection, setIsvisibleSection] = useState("team")
    return(
        <div className="insta-mart">
            <h1>Instamart</h1>
            <Section
            title={"About Instamart"}
            description={"This is the about section of Instamart "}
            isVisible={visibleSection == "about"}
            setIsVisible={() =>
                setIsvisibleSection("about")}
            />
        
        
            <Section
            title={"team instamart"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec felis ac nulla accumsan fermentum. Fusce feugiat auctor leo, nec laoreet arcu feugiat ac. Aliquam erat volutpat. Sed interdum vehicula ante, ut scelerisque mi mollis eu. Integer quis felis ac neque bibendum fermentum eget non orci. Cras feugiat neque sit amet diam volutpat, nec venenatis lectus feugiat. Aenean feugiat nibh id neque vehicula, eget viverra neque lacinia. Sed malesuada convallis ligula. Etiam quis quam eu arcu tristique scelerisque. "}
            
            isVisible={visibleSection == "team"} 
            setIsVisible={() =>
                setIsvisibleSection("team")}   
            />

        <Section
            title={"careers  Instamart"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec felis ac nulla accumsan fermentum. Fusce feugiat auctor leo, nec laoreet arcu feugiat ac. Aliquam erat volutpat. Sed interdum vehicula ante, ut scelerisque mi mollis eu. Integer quis felis ac neque bibendum fermentum eget non orci. Cras feugiat neque sit amet diam volutpat, nec venenatis lectus feugiat. Aenean feugiat nibh id neque vehicula, eget viverra neque lacinia. Sed malesuada convallis ligula. Etiam quis quam eu arcu tristique scelerisque. "}
            
            isVisible={visibleSection == "careers"} 
            setIsVisible={() =>
                setIsvisibleSection("careers")}  
            />
        </div>
        
    )
}
export default InstaMart;