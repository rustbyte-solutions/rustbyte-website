import Solution from "../components/Solution";
import SolutionsData from "../data/Solutions";

function Solutions () {
    return ([
        <div id="solutions"/>,
        <div class="mt-16 sm:mt-36 px-10">
            <div class="flex flex-col font-inter font-medium items-center w-1/2 mx-auto">
                <h1 class="md:text-7xl text-5xl text-center tracking-tight font-bold">Our Solutions</h1>
                <p class="md:text-2xl text-xl text-center mt-4">We strive to make the in-game experience of our users
                    <span className="block">to be the best it can be while keeping quality of life in mind</span>
                </p>
            </div>

            <div class="mt-12 mx-12 flex flex-row flex-wrap gap-6 items-stretch justify-center">
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