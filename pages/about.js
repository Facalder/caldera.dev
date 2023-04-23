import Image from 'next/image';

const About = () => {
  return (
    <section className="space-y-12">
      <div className="space-y-6">
        <h1 className="text-xl font-medium">About Me</h1>
        <p className="text-base text-gray-600">
          Hey, I’m Fa Ainama (Caldera), a self-taught developer, writer and an open source
          enthusiast exploring what’s possible on the web and with software. I like to
          spend my time building projects that interest me, as well as pushing myself to
          learn more through open source projects and share my knowledge with other
          developers.
        </p>
      </div>
      <Image
        src="/../public/img/thumbnail.jpg"
        width={200}
        height={200}
        alt="Profile Photo"
        className="w-full rounded-lg"
      />

      <div className="space-y-6">
        <h1 className="text-base font-medium">About Site</h1>
        <ol className="list-disc space-y-3 px-14">
          <li className="text-base text-gray-600">
            Frontend Framework: <span className="font-bold">Next Js</span>
          </li>
          <li className="text-base text-gray-600">
            CMS: <span className="font-bold">Prismic</span>
          </li>
          <li className="text-base text-gray-600">
            Deployment: <span className="font-bold">Vercel</span>
          </li>
          <li className="text-base text-gray-600">
            Analytics: <span className="font-bold">Vercel</span>
          </li>
        </ol>
        <p className="text-base text-gray-600">
          Thanks to Timothy Lin for the tailwind-nextjs-starter-blog. It helped me when I
          have not any idea how to create a blog from scratch. My code is not like the
          starter code because I changed a lot of code :)
        </p>
      </div>

      <div className="space-y-6">
        <h1 className="text-base font-medium">Inspiration</h1>
        <p className="text-base text-gray-600">
          Here are some websites that inspired me a lot to build a fantastic website.
        </p>
        <ol className="list-disc space-y-3 px-14">
          <li className="text-base font-bold text-gray-600">Blogspot.com</li>
          <li className="text-base font-bold text-gray-600">Blogspot.com</li>
          <li className="text-base font-bold text-gray-600">Blogspot.com</li>
          <li className="text-base font-bold text-gray-600">Blogspot.com</li>
        </ol>
      </div>
    </section>
  );
};

export default About;
