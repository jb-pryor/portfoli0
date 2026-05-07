import { Link } from "react-router-dom";

import Footer from "../components/Footer";

function Project1() {

  return (
    <>
    <div className='bg-zinc-900 text-zinc-400 min-h-screen font-[Inter] text-left text-white'>

      <div className="px-6 md:px-20">
      {/* Nav */}
      <div className='flex gap-8 md:gap-25 text-lg md:text-2xl pt-8 md:mt-10'>
        <Link to="/"><div className='text-gray-200 hover:text-[#7b00ff] cursor-pointer'>Home</div></Link>
      </div>

      <h1 className="md:ml-40 md:mr-40 text-center text-3xl md:text-5xl text-zinc-200 font-bold mt-12 md:mt-30">
        Department KPI Dashboard Tracker
      </h1>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40">
        Worked with Point Loma Director of Research. The goal was to create a system that could clearly visualize departmental performance data in a way that was both meaningful and easy to use. Each department is evaluated yearly using 10–12 key performance indicators. These metrics play a major role in determining the overall success of a department, so being able to interpret them quickly is important.
      </div>

      <div className="mt-10 md:mt-20 md:mr-40 md:ml-40 font-bold text-xl text-zinc-200">Problem</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        The main challenge was that the data existed, but it was not easily explorable. Brent wanted a way to visualize KPIs and also track how they changed over time for specific departments. Another key requirement was that the system needed to be dynamic. As new data is added in the future, the dashboard should automatically update without needing manual changes.
      </div>
      
      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-xl text-zinc-200">Solution</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        Working alongside a classmate, we built a data visualization dashboard to solve these problems. The application allows users to select departments and KPIs, then instantly see trends and performance over time. We focused on making the interface simple while still supporting flexible data exploration.
      </div>
      
      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-xl text-zinc-200">Tech Stack</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        Angular + TypeScript<br/>
        ApexCharts (data visualization)<br/>
        Google Sheets API (data source)<br/><br/>
        Using Google Sheets allowed us to treat the spreadsheet as a lightweight backend, which made the system easy to update and maintain.
      </div>
      
      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-xl text-zinc-200">Dynamic Data Integration</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        One of the most important parts of this project was dynamically loading data from Google Sheets.
      </div>
      
      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 border border-black bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`this.http.get(sheetUrl).subscribe((data) => {
  this.kpiData = transformData(data);
});`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:mr-40 md:ml-40">
        This allowed the dashboard to automatically reflect new data without requiring code changes.
      </div>

      <div className="mt-10 md:mt-20 md:mr-40 md:ml-40 font-bold text-xl text-zinc-200">Chart Design</div>
      <div className="mt-5 md:mt-10 md:ml-40 md:mr-40 mb-6 md:mb-15">
        We used ApexCharts to create interactive graphs that display KPI trends over time.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 border border-black text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`this.chartOptions = {
  series: [{
    name: "KPI Score",
    data: this.kpiValues
  }],
  chart: {
    type: "line"
  },
  xaxis: {
    categories: this.years
  }
};`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        We chose line charts because they clearly show progression and trends across multiple years.
      </div>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-xl text-zinc-200">Design Decisions</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        One important decision was prioritizing clarity over complexity. Instead of adding too many visual elements, we focused on making the data easy to read and interpret. We also structured the app so that adding a new KPI or department would not require rewriting logic, just updating the data source.
      </div>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">Image</div>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        The dashboard allows users to quickly compare performance across years and identify trends in specific KPIs.
      </div>
    
      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-xl text-zinc-200">Collaboration</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        We met with Brent weekly to show progress and gather feedback. This helped ensure that the final product aligned with real-world needs rather than assumptions. Working with a real client also meant adapting quickly and making design decisions based on usability, not just technical preference.
      </div>
    
      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-xl text-zinc-200">What I Learned</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        This project gave me practical experience building something for an actual user. It showed me how important communication, iteration, and feedback are when developing software. It also helped me better understand how to design systems that are flexible and scalable, especially when working with dynamic data.
      </div>

      <div className="mt-10 md:mt-20 md:mr-40 md:ml-40 font-bold text-xl text-zinc-200">Final Thoughts</div>
      <div className="mt-5 md:ml-40 md:mr-40 mb-10 pb-10">
        This project was a great introduction to building a product driven by real requirements. It reinforced the importance of balancing technical implementation with user experience and long-term maintainability.
      </div>
      </div>

      <Footer />

    </div>
    </>
  );
}

export default Project1;