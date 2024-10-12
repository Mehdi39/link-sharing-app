import PhoneMockup from "@/components/PhoneMockup";
import LinksHome from "@/components/LinksHome";

export default function Home() {
  return (
      <main className="">
          <section className="flex justify-between gap-10">
              <div className="flex justify-center items-center w-full bg-pure_white">
                  <PhoneMockup/>
              </div>
              <div className="w-full h-full bg-pure_white">
                  <LinksHome/>
              </div>
          </section>
      </main>
  );
}
