import React from "react";

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: "101",
          title: "Read Book",
          description: "Read a Bhagvatgita",
          startDate: "06-jul-2025",
          endDate: "06-jul-2025",
          startTime: "7:00",
          endTime: "8:00",
        },
        {
          id: "102",
          title: "Read Book",
          description: "Read a Bhagvatgita",
          startDate: "06-jul-2025",
          endDate: "06-jul-2025",
          startTime: "7:00",
          endTime: "8:00",
        },
      ],
    };

    // console.log(this.state.tasks);
  }

  render() {
    return (
      <section
        id="to-do"
        className="bg-white text-gray-800 py-16 px-6 md:px-20"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center uppercase mb-12 text-black">
            Taks Manager
          </h1>

          {/* Task List */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold uppercase text-center mb-8 text-black">
              Task List
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md overflow-hidden">
                <thead>
                  <tr className="bg-black text-white text-sm uppercase text-left">
                    <th className="py-3 px-4 border-r">#</th>
                    <th className="py-3 px-4 border-r">Title</th>
                    <th className="py-3 px-4 border-r">Description</th>
                    <th className="py-3 px-4 border-r">Start Date</th>
                    <th className="py-3 px-4 border-r">End Date</th>
                    <th className="py-3 px-4 border-r">Time Range</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.tasks.map((task) => (
                    <tr
                      key={task.id}
                      className="text-gray-700 text-sm text-left hover:bg-gray-50 border-t border-gray-200"
                    >
                      <td className="py-3 px-4 border-r">{task.id}</td>
                      <td className="py-3 px-4 border-r">{task.title}</td>
                      <td className="py-3 px-4 border-r">{task.description}</td>
                      <td className="py-3 px-4 border-r">{task.startDate}</td>
                      <td className="py-3 px-4 border-r">{task.endDate}</td>
                      <td className="py-3 px-4 border-r">
                        {task.startTime} to {task.endTime}
                      </td>
                      <td className="py-3 px-4 flex justify-center gap-4">
                        <i className="fa-regular fa-pen-to-square text-green-600 cursor-pointer hover:text-green-800 transition"></i>
                        <i className="fa-solid fa-trash text-red-600 cursor-pointer hover:text-red-800 transition"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className=""></div>
          <hr className="mt-16 border-gray-300" />
        </div>
      </section>
    );
  }
}
