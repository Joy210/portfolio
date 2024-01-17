import Heading from "../Heading";
import { projectList } from "../data/projectListData";
import ProjectCard from "./ProjectCard";

const SelectedWork = () => {
  return (
    <div className="bg-slate-950 py-12 md:py-120 relative">
      <div className="container space-y-8 md:space-y-0">
        <Heading text1="Selected" text2="work" bgDark />

        <div className="md:px-28 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 md:[&>*:first-child]:pt-24">
            {projectList.map(({ url, title, tag, imageURL }, i) => (
              <ProjectCard
                key={i}
                url={url}
                title={title}
                tag={tag}
                imageURL={imageURL}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
