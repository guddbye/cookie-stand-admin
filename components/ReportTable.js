import useResource from '../hooks/useResource'

export default function ReportTable({ hours }) {

  const { resources } = useResource()

  if (resources && resources.length) {
    return (
      <table className="w-8/12 px-3 pb-2 mx-auto my-5 text-sm border bg-emerald-400 border-emerald-600">
        <thead>
          <tr className="border border-emerald-600">
            <th className="w-2/12 p-1 pl-1 text-left border border-emerald-600">Location</th>
            {hours.map((hour) => (
              <th className="pl-1 text-left border border-emerald-600" key={hour}>{hour}</th>
            ))}
            <th className="pl-1 text-left">Totals</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((report) => (
            <ResultsRow key={report.location} report={report} />
          ))}
          <tr>
            <td className="pl-1 font-bold text-left border border-emerald-600 bg-emerald-400">
              Totals
            </td>
            {hours.map((hour, index) => (
              <td key={hour} className="p-2 pl-4 text-right border border-emerald-600 bg-emerald-400">
                {resources.reduce(
                  (prev, curr) => prev + JSON.parse(curr.hourly_sales)[index],
                  0
                )}
              </td>
            ))}
            <td className="p-2 pl-4 text-right border border-emerald-600 bg-emerald-400">
              {hours
                .map((hour, index) =>
                resources.reduce(
                    (prev, curr) => prev + JSON.parse(curr.hourly_sales)[index],
                    0
                  )
                )
                .reduce((prev, curr) => prev + curr, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    return (
      <p className="w-8/12 mx-auto mt-5 text-center">
        No Cookie Stands Available
      </p>
    );
  }
}

function ResultsRow({ report }) {
  const { deleteResource } = useResource()

  function handleDelete() {
    deleteResource(report.id)
  }

  return (
    <tr className="border border-emerald-600">
      <td className="flex justify-between p-2 pl-4">
        <div className="font-bold">{report.location}</div>
        <div className="pr-2" onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
      </td>
      {JSON.parse(report.hourly_sales).map((hourData, index) => (
        <td className="p-2 pl-4 text-right border border-emerald-600" key={index}>
          {hourData}
        </td>
      ))}
      <td className="p-2 pl-4 text-right border border-emerald-600">
        {JSON.parse(report.hourly_sales).reduce((prev, curr) => prev + curr, 0)}
      </td>
    </tr>
  );
}