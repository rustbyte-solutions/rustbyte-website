import TeamPortrait from "../components/TeamPortrait";
import TeamData from "../data/team";

function Team() {
    /*  For teams, we return an array of elements, 
    so that the <div id = "team"/> can be properly used 
    to scroll down nicely when navbar link is clikced,
    since we can only return 1 thing in our component */
    
    return ([
        <div id="team" />,
        <div className="mt-16 sm:mt-36 px-10">
            <div className="flex flex-col font-inter font-medium items-center w-1/2 mx-auto">
                <h1 className="md:text-7xl text-5xl text-center tracking-tight font-bold">Meet the team</h1>
                <p className="md:text-2xl text-xl text-center mt-4">See the minds behind Rustbyte 
                    <span className="block">and what they contribute to the team</span>
                </p>
            </div>

            <div className="mt-12 mx-12 flex flex-row flex-wrap gap-6 items-stretch justify-center">
                {TeamData.map((member) => (
                    <TeamPortrait
                    key={member.name}
                    name={member.name}
                    roles={member.roles}
                    rolesTitle={member.rolesTitle}
                    link={member.link}
                    description={member.description}
                />
                ))}
            </div>
        </div>
    ]);
};

export default Team;
