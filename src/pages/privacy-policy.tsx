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
              <h1 className="text-4xl">Privacy Policy for VoteMaster</h1>
              <p>
                VoteMaster ("we," "us," or "our") is committed to protecting
                your privacy. This Privacy Policy describes how we collect, use,
                and share personal information collected through our platform,
                which enables Members of Parliament (MPs) to better serve their
                constituents.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect personal information that you provide to us when you
                sign up for our platform, such as your name, email address, and
                other contact information. We also collect information about
                your use of our platform, such as your interactions with MPs,
                your feedback on initiatives and policies, and other data
                related to your use of our platform.{" "}
              </p>

              <h2>How We Use Your Information</h2>
              <p>
                We use your personal information to provide and improve our
                platform, to communicate with you about our platform, and to
                comply with legal obligations. We may also use your information
                to send you marketing communications about our products and
                services, unless you opt out of such communications.{" "}
              </p>

              <h2>Information We Share</h2>
              <p>
                We may share your personal information with MPs and other
                third-party service providers who assist us in providing and
                improving our platform. We may also share your information with
                law enforcement authorities or other third parties if required
                by law or if we believe in good faith that such disclosure is
                necessary to protect our rights or the safety of others.
              </p>
              <h2>Your Rights</h2>
              <p>
                You have the right to access and correct your personal
                information that we hold about you. You may also request that we
                delete your personal information, although we may retain certain
                information as required by law or for legitimate business
                purposes.
              </p>
              <h2>Security</h2>
              <p>
                We take reasonable measures to protect your personal information
                from unauthorized access, disclosure, and misuse. However, no
                security measures are foolproof, and we cannot guarantee the
                security of your personal information.
              </p>
              <h2>Changes to This Privacy</h2>
              <p>
                Policy We may update this Privacy Policy from time to time to
                reflect changes in our practices or applicable laws. We will
                notify you of any material changes to this Privacy Policy by
                posting a notice on our website or by other means.{" "}
              </p>
              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or our practices, please contact us at support@votemaster.in.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
