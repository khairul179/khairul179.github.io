import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  // Removed unused animationName state

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text text-white">My Work Experience</p>

        <div className="work-container">
          {/* Left: Avatar Image */}
          <div className="flex justify-center items-center">
            <img
              src="/assets/formalphoto.jpg"
              alt="Khairul Islam"
              className="w-48 h-64 rounded-full object-cover border-4 border-white shadow-xl transition-all duration-500 ease-in-out hover:scale-102 hover:scale-y-105 hover:ring-2 hover:ring-indigo-300"

            />
          </div>

          {/* Right: Work Experience Cards */}
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  // Removed animationName state updates as it is unused
                  className="work-content_container group">
                  
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full object-contain" src={item.icon} alt="" />
                    </div>
                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} — <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
