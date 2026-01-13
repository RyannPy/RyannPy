import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
          About <span className="text-purple-500">Me</span>
        </h2>
        
        <AboutContent></AboutContent>
      </div>
    </section>
  );
}
