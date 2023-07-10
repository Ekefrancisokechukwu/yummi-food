import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { Map } from "../components/Map";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BsSendFill } from "react-icons/bs";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <PageHero>
        <div className="">
          <h1 className="mb-4 text-4xl font-medium  capitalize tracking-widest">
            contact us
          </h1>
          <Link to="/" className="duration-300 hover:text-yellow-500">
            Home
          </Link>{" "}
          / <span> contact us</span>
        </div>
      </PageHero>
      <section className="">
        <div className="px-48 py-20 xl:px-20 tablet:px-5">
          <Map />
        </div>

        <section className="mx-auto grid w-[65rem] grid-cols-[20rem_auto] gap-8 py-9 text-gray-500 xl:w-full xl:grid-cols-1 xl:px-8">
          <div className="">
            <article className="flex items-center justify-center gap-5 border px-10 py-12 hover:border-rose-600">
              <span className="bg-rose-600 p-4 text-2xl text-white">
                <BsTelephoneFill />
              </span>
              <div className="">
                <h2 className="text-xl">Phone</h2>
                <h3 className="mb-1 mt-3">
                  <span className="font-semibold">Toll-Free:</span>0000 -
                  123-456789
                </h3>
                <h3>
                  <span className="font-semibold">Fax:</span>0000 - 123 - 456789
                </h3>
              </div>
            </article>

            <article className="mt-8 flex items-center justify-center gap-5 border px-10 py-12 hover:border-rose-600">
              <span className="bg-rose-600 p-4 text-2xl text-white">
                <GrMail />
              </span>

              <div className="">
                <h1 className="text-xl">Email</h1>

                <h3 className="mb-1 mt-3">mail@example.com</h3>
                <h3>support@example.com</h3>
              </div>
            </article>

            <article className="mt-8 flex items-center justify-center gap-5 border px-10 py-12 hover:border-rose-600">
              <span className="bg-rose-600 p-4 text-2xl text-white">
                <BsSendFill />
              </span>

              <div className="">
                <h1 className="text-xl">Address</h1>

                <p>
                  no: 58 A,East Madison <br /> street,
                </p>
                <p>Baltimore,MD,USA 4508</p>
              </div>
            </article>
          </div>
          <div className="">
            <ContactForm />
          </div>
        </section>
      </section>
    </main>
  );
};
export default Contact;
