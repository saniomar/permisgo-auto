"use client";

import { FaCalendarAlt, FaCaretDown, FaStar, FaWhatsapp } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";

const instructors = [
  {
    name: "Robert Fox",
    phone: "089636789000",
    avatar: "male1",
  },
  {
    name: "Leslie Alexander",
    phone: "089636789000",
    avatar: "male2",
  },
  {
    name: "Devon Lane",
    phone: "089636789000",
    avatar: "female",
  },
];

function Header() {
  return (
    <header className="flex items-center gap-[16px]">
      <button className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[12px] bg-[#EEF4FB] text-[27px] text-black">
        <IoChevronBack />
      </button>

      <h1 className="text-[26px] font-[700] leading-none text-[#174A9B]">
        Book Driving Lesson
      </h1>
    </header>
  );
}

function Field({ label, value, icon, dropdown }) {
  return (
    <div>
      <label className="mb-[13px] block text-[13.5px] font-[700] leading-none text-[#666666]">
        {label}
      </label>

      <div className="flex h-[44px] items-center rounded-[11px] border border-[#AFC5EB] bg-[#F7FAFF] px-[16px]">
        <span className="text-[14px] font-[500] text-[#222222]">{value}</span>

        <div className="ml-auto flex items-center">
          {icon}
          {dropdown && <FaCaretDown className="text-[18px] text-[#222222]" />}
        </div>
      </div>
    </div>
  );
}

function PhoneField() {
  return (
    <div>
      <label className="mb-[13px] block text-[13.5px] font-[700] leading-none text-[#666666]">
        Phone Number
      </label>

      <div className="flex h-[44px] items-center rounded-[11px] border border-[#D2DDEC] bg-[#F7FAFF] px-[16px]">
        <span className="mr-[13px] flex h-[19px] w-[19px] items-center justify-center rounded-full bg-[#006A4E]">
          <span className="h-[13px] w-[13px] rounded-full bg-[#F42A41]" />
        </span>

        <span className="text-[14px] font-[500] text-[#222222]">
          +880988900
        </span>
      </div>
    </div>
  );
}

function Avatar({ type }) {
  if (type === "female") {
    return (
      <div className="relative h-[68px] w-[68px] overflow-hidden rounded-full bg-[#D6D9DD]">
        <div className="absolute left-1/2 top-[8px] h-[45px] w-[46px] -translate-x-1/2 rounded-full bg-[#171717]" />
        <div className="absolute left-1/2 top-[22px] h-[34px] w-[32px] -translate-x-1/2 rounded-full bg-[#C58A68]" />
        <div className="absolute bottom-[-16px] left-1/2 h-[44px] w-[58px] -translate-x-1/2 rounded-t-full bg-[#111827]" />
      </div>
    );
  }

  if (type === "male2") {
    return (
      <div className="relative h-[68px] w-[68px] overflow-hidden rounded-full bg-[#0074A6]">
        <div className="absolute left-1/2 top-[9px] h-[32px] w-[38px] -translate-x-1/2 rounded-full bg-[#111111]" />
        <div className="absolute left-1/2 top-[20px] h-[36px] w-[34px] -translate-x-1/2 rounded-full bg-[#A87048]" />
        <div className="absolute left-[21px] top-[31px] h-[6px] w-[27px] rounded-full border border-black" />
        <div className="absolute bottom-[-17px] left-1/2 h-[45px] w-[58px] -translate-x-1/2 rounded-t-full bg-[#172032]" />
      </div>
    );
  }

  return (
    <div className="relative h-[68px] w-[68px] overflow-hidden rounded-full bg-[#1E9AD7]">
      <div className="absolute left-1/2 top-[10px] h-[31px] w-[38px] -translate-x-1/2 rounded-full bg-[#2A1B15]" />
      <div className="absolute left-1/2 top-[19px] h-[38px] w-[34px] -translate-x-1/2 rounded-full bg-[#C98454]" />
      <div className="absolute bottom-[-16px] left-1/2 h-[43px] w-[58px] -translate-x-1/2 rounded-t-full bg-[#F3F5F8]" />
    </div>
  );
}

function InstructorCard({ item }) {
  return (
    <div className="flex h-[319px] flex-col items-center rounded-[10px] bg-white px-[24px] pt-[17px]">
      <Avatar type={item.avatar} />

      <h3 className="mt-[17px] text-center text-[21px] font-[700] leading-none text-[#174A9B]">
        {item.name}
      </h3>

      <div className="mt-[12px] flex items-center justify-center gap-[6px]">
        <FaWhatsapp className="text-[15px] text-[#10B86F]" />
        <span className="text-[14px] font-[500] leading-none text-[#666666]">
          {item.phone}
        </span>
      </div>

      <div className="mt-[18px] flex h-[76px] w-[214px] flex-col items-center justify-center rounded-[10px] bg-[#E8EEF8]">
        <p className="text-[12px] font-[500] leading-none text-[#666666]">
          Experience{" "}
          <span className="font-[700] text-[#222222]">05 Years+</span>
        </p>

        <div className="mt-[14px] flex gap-[10px] text-[16px] text-[#174A9B]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>

      <button className="mt-[16px] h-[41px] w-[214px] rounded-[8px] border border-[#E5273D] bg-white text-[12px] font-[700] text-[#174A9B]">
        Book Now
      </button>
    </div>
  );
}

function InstructorSection() {
  return (
    <section className="mt-[20px] rounded-[10px] bg-[#E8EEF8] px-[20px] pb-[22px] pt-[22px]">
      <h2 className="text-[18px] font-[700] leading-none text-[#222222]">
        Available Instructor
      </h2>

      <div className="mt-[25px] grid grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-3">
        {instructors.map((item) => (
          <InstructorCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          background: #ffffff;
          font-family: "Poppins", sans-serif;
          overflow-x: hidden;
        }
      `}</style>

      <main className="min-h-screen bg-white">
        <div className="mx-auto w-full max-w-[1132px] px-[24px] pb-[24px] pt-[24px]">
          <Header />

          <section className="mt-[34px] rounded-[10px] bg-[#E8EEF8] px-[24px] py-[24px]">
            <div className="rounded-[10px] bg-white px-[24px] pb-[24px] pt-[28px] sm:px-[24px] xl:px-[24px]">
              <h2 className="text-[22px] font-[700] leading-none text-[#111111]">
                Fill out this form
              </h2>

              <div className="mt-[29px] grid grid-cols-1 gap-x-[24px] gap-y-[24px] md:grid-cols-2">
                <Field label="First Name" value="Robert" />
                <Field label="Last Name" value="Fox" />

                <PhoneField />
                <Field label="Vehicle type" value="Manual Car" dropdown />

                <Field
                  label="Select Date"
                  value="10/12/2025"
                  icon={
                    <FaCalendarAlt className="text-[18px] text-[#222222]" />
                  }
                />
                <Field label="Select Time" value="10 AM - 12 PM" dropdown />

                <Field label="Address" value="House no : 100, Dhaka" />
                <Field label="Your City" value="Dhaka" />
              </div>

              <InstructorSection />

              <button className="mt-[39px] h-[49px] w-[96px] rounded-[11px] bg-[#E5273D] text-[15px] font-[700] text-white">
                Submit
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
