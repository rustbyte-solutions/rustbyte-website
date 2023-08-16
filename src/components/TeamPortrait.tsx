interface TeamPortraitProps {
    name: string,
    roles: string,
    rolesTitle: string,
    link: string,
    description: string
}

const  TeamPortrait: React.FC<TeamPortraitProps> = ({
    name,
    roles,
    rolesTitle,
    link,
    description
}) => {

    let picture = `/Profiles/${name}.webp`;

    return (
        <a className="hover:-translate-y-4 duration-500" href={link} target="_blank">
            <div className="flex flex-col justify-center items-center text-center w-56 md:w-64 bg-[#F9F9F9] dark:bg-[#0A0A0A] border-2 border-[#C6C6C6] dark:border-[#353535] gap-1 px-5 py-2 shadow-xl rounded-lg duration-500">
                <img alt={name} id="avatar" height="114px" width="114px" className="rounded-full mt-4" src={picture} />

                <div id="role" className="mt-2 flex flex-row text-lg font-semibold" title={rolesTitle}>
                    {roles}
                </div>

                <h1 className="text-xl font-bold">
                    {name}
                </h1>

                <p className="mt-2 mb-4 text-md font-semibold">
                    {description}
                </p>
            </div>
        </a>
    );
};

export default TeamPortrait;