import Solution from "../components/Solution";
import SolutionsData from "../data/Solutions";

function Solutions () {
    return ([
        <div id="solutions"/>,
        <div className="mt-16 sm:mt-36 px-10">
            <div className="flex flex-col font-inter font-medium items-center mx-auto">
                <h1 className="md:text-7xl text-5xl text-center tracking-tight font-bold">Our Solutions</h1>
                <p className="md:text-2xl text-xl text-center mt-4">
                    We strive to make the in-game experience of our users <br/> to be the best it can be while keeping quality of life in mind
                </p>
            </div>

            <div className="mt-12 mx-12 flex flex-row flex-wrap gap-6 items-stretch justify-center">
                {SolutionsData.map((solution) => (
                    <Solution
                        key={solution.name}
                        name={solution.name}
                        link={solution.link}
                        description={solution.description}
                    />
                ))}
            </div>
        </div>
    ]);
};

export default Solutions;