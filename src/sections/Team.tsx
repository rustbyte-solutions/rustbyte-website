import TeamPortrait from "../components/TeamPortrait";
import TeamData from "../data/Team";

function Team () {
    return ([
        <div id="team" />,
        <div className="mt-16 sm:mt-36 px-10">
            <div className="flex flex-col font-inter font-medium items-center mx-auto">
                <h1 className="md:text-7xl text-5xl text-center tracking-tight font-bold">Meet the team</h1>
                <p className="md:text-2xl text-xl text-center mt-4">
                    See the minds behind Rustbyte <br/> and what they contribute to the team
                </p>
            </div>

            <div className="mt-12 mx-12 flex flex-row flex-wrap gap-6 items-stretch justify-center">
                {TeamData.map((member) => (
                    <TeamPortrait
                        key={member.name}
                        name={member.name}
                        roles={member.roles}
                        rolesTitle={member.rolesTitle}
                        discordId={member.discordId}
                        description={member.description}
                    />
                ))}
            </div>
        </div>
    ]);
};

export default Team;
