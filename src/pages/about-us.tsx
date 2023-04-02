/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import IndexNavbar from "@/components/Navbars/IndexNavbar";
import Footer from "@/components/Footers/Footer";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16">
        <div className="container mx-auto">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="py-32">
              <h1 className="text-4xl">Vote master</h1>
              <p>
                VoteMaster is a startup that aims to empower Members of
                Parliament (MPs) to better serve their constituents. By
                providing a digital platform that connects MPs with their
                constituents, VoteMaster makes it easier for MPs to stay
                informed about the needs and concerns of the people they
                represent. VoteMaster also offers tools for MPs to communicate
                with their constituents, gather feedback on important issues,
                and track the progress of initiatives and policies. With
                VoteMaster, MPs can make more informed decisions and better
                represent the interests of their constituents.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
