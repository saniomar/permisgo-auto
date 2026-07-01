import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoChevronBack } from "react-icons/io5";

const progressLessons = Array.from({ length: 3 }, (_, index) => ({
  id: index + 1,
  title: "Legal provisions regarding road traffic",
  date: "Monday, March 2, 2026, 10:00 AM",
  progress: 20,
}));

const completedLessons = Array.from({ length: 3 }, (_, index) => ({
  id: index + 1,
  title: "Legal provisions regarding road traffic",
  date: "Monday, March 2, 2026, 10:00 AM",
  vehicle: "Automatic - Toyota Corolla",
  progress: 100,
}));

const topicResultsLeft = [
  { code: "L", value: 40, color: "#6ab4e4" },
  { code: "C", value: 40, color: "#e5008a" },
  { code: "R", value: 30, color: "#aaa0d1" },
  { code: "U", value: 47, color: "#d84b2e" },
  { code: "D", value: 36, color: "#ffc218" },
];

const topicResultsRight = [
  { code: "HAS", value: 40, color: "#ef3434" },
  { code: "P", value: 47, color: "#565654" },
  { code: "M", value: 21, color: "#f29100" },
  { code: "S", value: 31, color: "#3c982b" },
  { code: "E", value: 37, color: "#96ab18" },
];

const topicListLeft = [
  {
    code: "L",
    color: "#f2a300",
    text: "Legal provisions regarding road traffic",
  },
  { code: "C", color: "#3aa0e5", text: "The Driver" },
  { code: "R", color: "#ef3434", text: "The Road" },
  { code: "U", color: "#7669b0", text: "Other road users" },
  {
    code: "D",
    color: "#e5008a",
    text: "General regulations and miscellaneous",
  },
];

const topicListRight = [
  { code: "HAS", color: "#e83083", text: "First aid" },
  {
    code: "P",
    color: "#565654",
    text: "Precautions to take when leaving the vehicle",
  },
  {
    code: "M",
    color: "#39aaa9",
    text: "Mechanical components and other safety-related equipment",
  },
  { code: "S", color: "#3c982b", text: "Vehicle safety equipment" },
  {
    code: "E",
    color: "#96ab18",
    text: "Rules for using the vehicle in relation to ecology",
  },
];

const SliderButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#dfe6f1] text-[#df2339]">
        <FaArrowLeft className="text-[10px]" />
      </button>

      <button className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#df2339] text-white">
        <FaArrowRight className="text-[10px]" />
      </button>
    </div>
  );
};

const LessonCard = ({ item, completed = false }) => {
  return (
    <article className="rounded-[8px] bg-white p-3">
      <Link
        href="#"
        className="block text-[12.5px] font-extrabold leading-[1.35] text-[#143f8d] underline underline-offset-2"
      >
        {item.title}
      </Link>

      <div className="mt-2 space-y-0.5 text-[10.5px] leading-relaxed text-[#666]">
        <p>
          Start Date <span className="font-bold text-[#111]">{item.date}</span>
        </p>

        {completed && (
          <p>
            Vehicle Type:{" "}
            <span className="font-bold text-[#111]">{item.vehicle}</span>
          </p>
        )}
      </div>

      <div className="mt-2.5 h-[8px] w-full overflow-hidden rounded-full bg-[#d5dce7]">
        <div
          className="h-full rounded-full bg-[#174596]"
          style={{ width: `${item.progress}%` }}
        />
      </div>

      <p className="mt-1.5 text-[10.5px] font-extrabold text-[#13bf38]">
        {completed ? "100% Completed" : "20% Progress"}
      </p>
    </article>
  );
};

const SectionBox = ({ title, children, showSlider = false }) => {
  return (
    <section className="mt-4 rounded-[9px] bg-[#e8eef7] p-3">
      {title && (
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="text-[16px] font-extrabold leading-none text-[#143f8d]">
            {title}
          </h2>

          {showSlider && <SliderButtons />}
        </div>
      )}

      {children}
    </section>
  );
};

const PerformanceCard = ({ title, description, lines, buttonText }) => {
  return (
    <article className="rounded-[9px] bg-white p-5">
      <h3 className="text-[18px] font-extrabold leading-tight text-[#111]">
        {title}
      </h3>

      <p className="mt-3 max-w-[410px] text-[13px] leading-[1.55] text-[#222]">
        {description}
      </p>

      <div className="mt-2 space-y-[2px] text-[12.5px] leading-relaxed text-[#111]">
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <button className="mt-4 rounded-[7px] bg-[#df2339] px-3.5 py-2 text-[11px] font-bold text-white">
        {buttonText}
      </button>
    </article>
  );
};

const TopicBar = ({ item }) => {
  return (
    <div className="h-[32px] overflow-hidden rounded-[4px] bg-white">
      <div
        className="flex h-full items-center justify-between rounded-[4px] px-3 text-white"
        style={{
          width: `${item.value}%`,
          minWidth: "105px",
          backgroundColor: item.color,
        }}
      >
        <span className="text-[14px] font-extrabold">{item.code}</span>
        <span className="text-[14px] font-extrabold">{item.value}%</span>
      </div>
    </div>
  );
};

const TopicListItem = ({ item }) => {
  return (
    <div className="grid grid-cols-[42px_1fr] items-start gap-2">
      <span
        className="text-[15px] font-extrabold leading-none"
        style={{ color: item.color }}
      >
        {item.code} :
      </span>

      <span className="text-[12px] leading-relaxed text-[#666]">
        {item.text}
      </span>
    </div>
  );
};

const MyHistoryPage = () => {
  return (
    <main className="min-h-screen bg-white px-5 py-5 font-sans text-[#111]">
      <div className="mx-auto w-full max-w-[1000px]">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-[#e7ebf2] text-[20px] text-black"
            >
              <IoChevronBack />
            </Link>

            <h1 className="text-[22px] font-extrabold text-[#143f8d]">
              My History
            </h1>
          </div>

          <button className="h-9 rounded-[7px] bg-[#df2339] px-4 text-[11px] font-bold text-white">
            Download
          </button>
        </header>

        <SectionBox title="Lesson Progress" showSlider>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            {progressLessons.map((lesson) => (
              <LessonCard key={lesson.id} item={lesson} />
            ))}
          </div>
        </SectionBox>

        <SectionBox title="Lesson Completed" showSlider>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            {completedLessons.map((lesson) => (
              <LessonCard key={lesson.id} item={lesson} completed />
            ))}
          </div>
        </SectionBox>

        <SectionBox>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <PerformanceCard
              title="Total Performance in Mock Exam"
              description="See your overall score and track your progress in traffic rules knowledge."
              lines={["Score: 85%", "Total Mock Test: 20", "Passed: 13"]}
              buttonText="Take Practice Test"
            />

            <PerformanceCard
              title="Recent Quiz Result"
              description="See your latest score and track your progress in traffic rules knowledge."
              lines={[
                "Latest Score: 85%",
                "Correct Answers: 17 / 20",
                "Status: Passed",
              ]}
              buttonText="Review Answers"
            />
          </div>
        </SectionBox>

        <SectionBox title="My result by topic">
          <div className="mt-4 grid grid-cols-1 gap-x-5 gap-y-3 md:grid-cols-2">
            <div className="space-y-3">
              {topicResultsLeft.map((item) => (
                <TopicBar key={item.code} item={item} />
              ))}
            </div>

            <div className="space-y-3">
              {topicResultsRight.map((item) => (
                <TopicBar key={item.code} item={item} />
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-[9px] bg-white p-5">
            <h3 className="text-[14px] font-extrabold text-[#143f8d]">
              List of topics:
            </h3>

            <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
              <div className="space-y-4">
                {topicListLeft.map((item) => (
                  <TopicListItem key={item.code} item={item} />
                ))}
              </div>

              <div className="space-y-4">
                {topicListRight.map((item) => (
                  <TopicListItem key={item.code} item={item} />
                ))}
              </div>
            </div>
          </div>
        </SectionBox>
      </div>
    </main>
  );
};

export default MyHistoryPage;
