import Lanyard from "./Lanyard";
import IntroduceHome from "./IntroduceHome";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen text-white px-6 md:px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center">

        {/* LANYARD — MOBILE TOP, DESKTOP RIGHT */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-[55vh] md:h-full">
          <Lanyard
            position={[0, 0, 22]}
            gravity={[0, -40, 0]}
          />
        </div>

        {/* TEXT */}
        <div className="order-2 md:order-1 space-y-6 z-10">
          <IntroduceHome></IntroduceHome>
        </div>

      </div>
    </section>
  );
}
