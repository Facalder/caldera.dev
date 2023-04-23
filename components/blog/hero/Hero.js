const Hero = () => {
  return (
    <section className="space-y-6">
      <div className="flex flex-col-reverse gap-8 md:flex-row md:justify-between">
        <div className="space-y-12">
          <h1 className="text-base font-medium">Writing</h1>
          <p className="text-base text-gray-600">
            Brain dumps, explorations, and how-to guides. I write about different topics,
            such as frontend, accessibility, start ups and user/dev experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
