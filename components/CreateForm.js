import useResource from '../hooks/useResource'
import { useAuth } from '../contexts/auth'

export default function CreateForm({ hours }) {

  const { user } = useAuth()
  const { createResource } = useResource()

  function handleSubmit(event) {
    event.preventDefault();

    let hourlyData = [];
    let maximum_customers_per_hour = parseInt(event.target.maximum_customers_per_hour.value);
    let minimum_customers_per_hour = parseInt(event.target.minimum_customers_per_hour.value);
    let avg_cookies_per_sale = parseFloat(
      event.target.avg_cookies_per_sale.value
    );
    for (let hour in hours) {
      let hourData = Math.round(
        (Math.random() * (maximum_customers_per_hour - minimum_customers_per_hour) +
        minimum_customers_per_hour) *
          avg_cookies_per_sale
      );
      hourlyData.push(hourData);
    }

    let report = {
      owner: null,
      maximum_customers_per_hour,
      minimum_customers_per_hour,
      avg_cookies_per_sale,
      location: event.target.location.value,
      hourly_sales: JSON.stringify(hourlyData),
    };
    createResource(report)
  }

  return (
    <form
      className="w-8/12 px-10 pt-5 pb-3 mx-auto text-sm border-2 border-solid rounded-lg bg-emerald-200 border-emerald-400"
      onSubmit={handleSubmit}
    >

      <div className="flex items-end">
        <div className="block w-2/3 m-2">
          <label className="block w-full p-1 pr-2 font-bold text-center">ADD LOCATION</label>
          <input id="location" type="text" className="block w-full p-2 mt-2" placeholder="Cookie Stand Location" required></input>
        </div>
        <div className="flex items-center justify-center w-1/3 h-12 p-2 my-2 ml-10 rounded bg-emerald-500">
          <button className="w-full mx-1 bg-emerald-500" type="submit">
            CREATE STAND
          </button>
        </div>
      </div>

      <div className="flex mt-5">
        <div className="w-1/3 p-2 mx-1 my-2 rounded bg-emerald-200">
          <label className="block mx-auto font-bold text-center">
            MINIMUM CUSTOMERS PER HOUR
          </label>
          <input id="minimum_customers_per_hour" type="text" className="w-full p-2 mt-2" defaultValue="0"></input>
        </div>
        <div className="w-1/3 p-2 mx-10 my-2 rounded bg-emerald-200">
          <label className="block mx-auto font-bold text-center">
            MAXIMUM CUSTOMERS PER HOUR
          </label>
          <input id="maximum_customers_per_hour" type="text" className="w-full p-2 mt-2" defaultValue="0"></input>
        </div>
        <div className="w-1/3 p-2 mx-1 my-2 font-bold rounded bg-emerald-200">
          <label className="block text-center">AVERAGE COOKIES PER SALE</label>
          <input
            id="avg_cookies_per_sale"
            type="text"
            className="w-full p-2 mt-2"
            defaultValue="0"
          ></input>
        </div>
      </div>
    </form>
  );
}