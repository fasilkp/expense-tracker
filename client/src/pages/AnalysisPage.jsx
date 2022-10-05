import React from "react";
import Analysis from "../components/Analysis/Analysis";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

function AnalysisPage() {
  return (
    <>
      <Header selected="chart" heading={"Analysis"}></Header>
      <Navbar selected="chart"></Navbar>
      <Analysis></Analysis>
    </>
  );
}

export default AnalysisPage;
