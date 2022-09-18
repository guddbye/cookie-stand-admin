export default function ReportTable({ hours, reports }) {
  if (reports.length) {
    return (
      <table className="w-8/12 px-3 pb-2 mx-auto my-5 text-sm rounded bg-blue-500">
        <thead>
          <tr>
            <th className="text-center">Location</th>
            {hours.map((hour) => (
              <th key={hour}>{hour}</th>
            ))}
            <th>Totals</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <ResultsRow key={report.name} report={report} />
          ))}
          <tr>
            <td className="font-bold text-center border border-black">
              Totals
            </td>
            {hours.map((hour, index) => (
              <td key={hour} className="pl-4 font-bold border border-black">
                {reports.reduce(
                  (prev, curr) => prev + curr.hourlyData[index],
                  0
                )}
              </td>
            ))}
            <td className="pl-4 font-bold border border-black">
              {hours
                .map((hour, index) =>
                  reports.reduce(
                    (prev, curr) => prev + curr.hourlyData[index],
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
  return (
    <tr>
      <td className="pl-4 border border-black">{report.name}</td>
      {report.hourlyData.map((hourData, index) => (
        <td className="pl-4 border border-black" key={index}>
          {hourData}
        </td>
      ))}
      <td className="pl-4 border border-black">
        {report.hourlyData.reduce((prev, curr) => prev + curr)}
      </td>
    </tr>
  );
}