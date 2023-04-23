/* eslint-disable tailwindcss/no-custom-classname */
const CardContainer = ({ children, column }) => {
  return (
    <section
      className={`sm:grid-cols-${column} mx-auto  grid grid-cols-1 gap-x-6 gap-y-12`}
    >
      {children}
    </section>
  );
};

export default CardContainer;
