import Image from 'next/image';

const BlogLayout = () => {
  return (
    <article className="space-y-10">
      <header className="mb-4 space-y-10 lg:mb-6">
        <address className="flex items-center not-italic">
          <div className="mr-3 inline-flex items-center text-xs">
            <Image
              className="mr-4 h-12 w-12 rounded-full bg-center object-cover"
              src="/../public/img/thumbnail.jpg"
              alt="Jese Leos"
              width={100}
              height={100}
            />
            <div>
              <h4 className="text-base font-medium">Jese Leos</h4>
              <p className="text-gray-600">Graphic Designer, educator & CEO Flowbite</p>
              <p className="text-gray-600">
                <time pubdate datetime="2022-02-08" title="February 8th, 2022">
                  Feb. 8, 2022
                </time>
              </p>
            </div>
          </div>
        </address>
        <h1 className="text-xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius nihil
          debitis, esse tenetur, doloremque, optio aspernatur quae odit ab
        </h1>
      </header>

      <p className="text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cum qui iusto
        officia inventore sunt, eius perspiciatis blanditiis voluptatibus, asperiores
        dolore repellat nostrum quo at numquam aut iste nisi ab!
      </p>
      <p className="text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cum qui iusto
        officia inventore sunt, eius perspiciatis blanditiis voluptatibus, asperiores
        dolore repellat nostrum quo at numquam aut iste nisi ab!
      </p>
      <div className="space-y-3 text-center">
        <Image
          className="mr-4 w-full rounded-lg"
          src="/../public/img/thumbnail.jpg"
          alt="Jese Leos"
          width={100}
          height={100}
        />
        <p className="text-xs text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum.{' '}
        </p>
      </div>

      <p className="text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cum qui iusto
        officia inventore sunt, eius perspiciatis blanditiis voluptatibus, asperiores
        dolore repellat nostrum quo at numquam aut iste nisi ab!
      </p>

      <p className="text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cum qui iusto
        officia inventore sunt, eius perspiciatis blanditiis voluptatibus, asperiores
        dolore repellat nostrum quo at numquam aut iste nisi ab!
      </p>

      <p className="text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cum qui iusto
        officia inventore sunt, eius perspiciatis blanditiis voluptatibus, asperiores
        dolore repellat nostrum quo at numquam aut iste nisi ab!
      </p>

      <p className="text-center text-4xl font-bold text-gray-600">¨ ¨ ¨</p>

      <div>hloo</div>
    </article>
  );
};

export default BlogLayout;
