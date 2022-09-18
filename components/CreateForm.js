export default function CreateForm({ handleAddReport, hours }) {
  function handleSubmit(event) {
    event.preventDefault();

    let hourlyData = [];
    
    for (let hour in hours) {
      let max_cust_per_hour = parseFloat(event.target.max_cust_per_hour.value);
      let min_cust_per_hour = parseFloat(event.target.min_cust_per_hour.value);
      let avg_cookies_per_sale = parseFloat(
        event.target.avg_cookies_per_sale.value
      );

      let hourData = Math.round(
        (Math.random() * (max_cust_per_hour - min_cust_per_hour) +
          min_cust_per_hour) *
          avg_cookies_per_sale
      );
      hourlyData.push(hourData);
    }

    let report = {
      name: event.target.location.value,
      hourlyData: hourlyData,
    };
    handleAddReport(report);
  }

  return (
    <form
      className="w-8/12 px-3 pb-2 mx-auto text-sm rounded-lg bg-blue-300"
      onSubmit={handleSubmit}
    >
      <h2 className="p-3 text-xl text-center">Create Cookie Stand</h2>

      <div className="flex m-2">
        <label className="pr-2">Location</label>
        <input id="location" type="text" className="flex-grow" required></input>
      </div>

      <div className="flex mt-5">
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-blue-200">
          <label className="block mx-auto text-center">
            Minimum Customers per Hour
          </label>
          <input id="min_cust_per_hour" type="text" className="w-full"></input>
        </div>
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-blue-200">
          <label className="block mx-auto text-center">
            Maximum Customers per Hour
          </label>
          <input id="max_cust_per_hour" type="text" className="w-full"></input>
        </div>
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-blue-200">
          <label className="block text-center">Average Cookies per Sale</label>
          <input
            id="avg_cookies_per_sale"
            type="text"
            className="w-full"
          ></input>
        </div>
        <div className="flex items-center justify-center w-1/4 p-2 mx-1 my-2 rounded bg-blue-500">
          <button className="w-1/4 mx-1 bg-blue-500" type="submit">
            Create
          </button>
        </div>
      </div>
    </form>
  );
}