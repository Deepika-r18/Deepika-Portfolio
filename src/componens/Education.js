const educationDetails = [
  {
    degree: "Master of Computer Applications",
    college: "M.A.M College of Engineering",
    duration: "2022 – 2024",
    grade: "8.0",
    type: "POSTGRADUATE",
  },
  {
    degree: "Bachelor of Computer Applications",
    college: "Srimad Andavan Arts and Science College",
    duration: "2019 – 2022",
    grade: "8.9",
    type: "UNDERGRADUATE",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-pink-50 px-5 py-20 font-hero-font md:px-12"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">
              The Learning Journey
            </p>

            <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
              Education
              {/* <span className="text-pink-500"></span> */}
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-gray-600 md:justify-self-end">
            A foundation in computer applications, technology,
            and analytical thinking that continues to shape my
            professional journey.
          </p>
        </div>

        {/* Academic Entries */}
        <div className="border-t border-gray-200">
          {educationDetails.map((item, index) => (
            <article
              key={item.degree}
              className="group grid gap-6 border-b border-gray-200
                py-9 transition-colors duration-300
                hover:bg-white md:grid-cols-12 md:gap-8 md:px-5"
            >
              {/* Index */}
              <div className="md:col-span-1">
                <span className="text-sm font-medium text-pink-500">
                  0{index + 1}
                </span>
              </div>

              {/* Qualification */}
              <div className="md:col-span-7">
                <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-gray-400">
                  {item.type}
                </p>

                <h3 className="text-2xl font-semibold leading-snug
                  text-gray-900 transition-colors duration-300
                  group-hover:text-pink-600 md:text-3xl">
                  {item.degree}
                </h3>

                <p className="mt-3 text-base leading-7 text-gray-600">
                  {item.college}
                </p>
              </div>

              {/* Year & Grade */}
              <div className="flex items-center justify-between gap-4 md:col-span-4 md:flex-col md:items-end md:justify-center">
                <div className="text-left md:text-right">
                  <p className="text-lg font-semibold tracking-tight text-gray-800">
                    {item.duration}
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Academic Score
                  </p>
                </div>

                <div className="flex h-16 w-16 shrink-0 items-center
                  justify-center rounded-full border border-pink-200
                  text-xl font-bold text-pink-600
                  transition duration-300 group-hover:bg-pink-500
                  group-hover:text-white">
                  {item.grade}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row
          sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Learning is a continuous process.
          </p>

          <span className="text-sm font-medium text-pink-600">
            Knowledge · Growth · Progress
          </span>
        </div>

      </div>
    </section>
  );
}
