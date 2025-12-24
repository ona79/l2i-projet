import React from "react";
import Menu from "../components/Menu.jsx";
import Footer from "./Footer.jsx";
import Section3_1 from "./Section3_1/index.jsx";
import Section3_2 from "./Section3_2/index.jsx";
import FormulaireContact from "./FormulaireContact.jsx";

const Page3 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Menu />
      <main className="flex-grow pt-20">
        <Section3_1 />
        <Section3_2 />
        <FormulaireContact />
      </main>
      <Footer />
    </div>
  );
};

export default Page3;
