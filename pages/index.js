import Head from "next/head";
import { useState } from "react";
import { hours } from "../data";
import ReportTable from "../components/ReportTable";
import CreateForm from "../components/CreateForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CookieStandAdmin() {
  const [reports, setReports] = useState([]);

  function handleAddReport(report) {
    setReports([...reports, report]);
  }

  return (
    <div>
        <Head>
            <title>Cookie Stand Admin</title>
            <link rel="icon" href="/cookie.ico" />
      </Head>

      <Header title="Cookie Stand Admin" />

      <main className="p-6 bg-emerald-50">
        <CreateForm handleAddReport={handleAddReport} hours={hours} />
        <ReportTable hours={hours} reports={reports} />
      </main>

      <Footer reports={reports} />
    </div>
  );
}