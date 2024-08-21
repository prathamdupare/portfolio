import GitHubCalendar from "react-github-calendar";
const GitHubCal = () => {
  return (
    <div className="flex flex-col my-10 items-center justify-center p-4 sm:p-6 md:p-8">
      <p className="text-2xl  text-white font-bold inter-var text-center ">
        GitHub Calendar
      </p>
      <div className="py-7 w-full">
        <GitHubCalendar username="prathamdupare" />
      </div>
    </div>
  );
};

export default GitHubCal;
