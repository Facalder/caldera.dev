const Hero = () => {
  return (
    <section className="space-y-6">
      <div className="flex flex-col-reverse gap-8 md:flex-row md:justify-between">
        <div className="space-y-12">
          <h1 className="text-base font-medium">Fa Ainama Caldera</h1>
          <p className="text-base text-gray-600">
            Welcome to my Digital Garden – I am a Frontend Developer by self-taught and
            Software Engineer Student at SMK IDN Boarding School.
          </p>
          <p className="text-base text-gray-600">
            I am currently have graduated from my school and available to get work at
            Frontend Developer.
          </p>
          <p className="text-base text-gray-600">
            Previously, I worked at{' '}
            <a
              href="https://hub.inagata.com"
              target="_blank"
              className="border-b-2 border-b-gray-200 hover:border-b-gray-300"
            >
              Hub Inagata,
            </a>{' '}
            Where focused on Frontend Development by using React Js, Next Js, and many
            more tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
