import React from "react";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import "./_.css";

function Heading() {
  return (
    <div className="bg-[#1D4B4A] p-4 shadow">
      <img
        src="/assets/heading.svg"
        alt="heading"
        className="w-full h-24 ml-0 mr-0"
      />
      <p className="text-center text-xl ubuntu-regular text-[#ebca17]">
        In the name of Allah, the most gracious, the most merciful
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="flex flex-col gap-4 mt-8 ps-8 pe-8 sm:ps-4 sm:pe-4">
      <h2 className="text-center mea-culpa-bold text-5xl text-[#1D4B4A]">
        Syed&apos;s Wedding Invitation
      </h2>
      <p className="text-center ubuntu-regular text-2xl mt-6">
        Under the Guardianship of: <b>Mrs. Late Mahaboob Sahab</b>
      </p>
      <h3 className="text-center mea-culpa-bold text-4xl text-[#1D4B4A]">
        Mrs. & Mr. Mantrala Moinuddin
      </h3>
      <p className="text-center text-2xl ubuntu-regular">
        Solicit your gracious presence on the auspicious occasion of the
      </p>
      <p className="text-center ubuntu-bold text-2xl">
        <b>MARRIAGE CEREMONY</b> <br />
        <span className="ubuntu-regular">of their son</span>
      </p>

      <p className="text-center mea-culpa-bold text-5xl text-[#1D4B4A]">
        Mohammad Fayaz
      </p>
      <p className="text-center ubuntu-regular text-2xl">
        With <br />
        <span className="mea-culpa-bold text-5xl text-[#1D4B4A]">
          Daughter of
        </span>
      </p>
      <p className="text-center ubuntu-regular text-2xl">
        <b>Mr. Shaik Khaja Hussain Sahab</b> <br /> SA. (Hindi), ZPHS
        Jammalamadugu
      </p>
    </div>
  );
}

function IconWithDetail(props: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  const { icon, title, subtitle } = props;

  return (
    <div className="flex gap-4 items-start">
      <span className="text-[#C4A661] text-2xl mt-1">{icon}</span>
      <div className="mt-0">
        <p className="text-2xl ubuntu-bold ">{title}</p>
        {subtitle && subtitle.length > 0 && (
          <p className="text-lg ubuntu-regular text-[#4B5563]">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function VenueAndEvent(props: {
  event: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  map: React.ReactNode;
}) {
  const { event, date, time, venue, location, map } = props;
  return (
    <div className="border-1 border-[#E5D3A3] p-4 ps-8 pe-8 pb-8 rounded-2xl flex-1 bg-[#FBF6F6] flex flex-col gap-3 shadow-xl">
      <h3 className="text-3xl text-center mb-4 text-[#1D4B4A] font-bold ubuntu-bold">
        {event}
      </h3>
      <div className="flex flex-col gap-4">
        <IconWithDetail icon={<FaCalendarCheck />} title={date} subtitle={""} />
        <IconWithDetail icon={<FaRegClock />} title={time} subtitle={""} />
        <IconWithDetail
          icon={<IoLocationSharp />}
          title={venue}
          subtitle={location}
        />
        {map}
      </div>
    </div>
  );
}

function Events() {
  return (
    <div className="flex flex-wrap gap-4 w-full mt-12 ps-8 pe-8">
      <VenueAndEvent
        event="Nikah Ceremony"
        date="Sunday, 18th May 2025"
        time="11 AM"
        venue="Madina Masjid"
        location="Lunch at MB Function Hall, Jammalamadugu, Kadapa"
        map={
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.070197907289!2d78.51807465549574!3d14.76507514985284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3877a1697f887%3A0x99212d9b4bc9ed9!2sMB%20FUNCTION%20HALL!5e0!3m2!1sen!2sin!4v1746272874357!5m2!1sen!2sin"
            className="border-0 rounded-lg"
            height="300"
            loading="eager"
          />
        }
      />
      <VenueAndEvent
        event="Valima Ceremony"
        date="Monday, 19th May 2025"
        time="7 PM"
        venue="YNS Convention"
        location="Onipenta, Kadapa"
        map={
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.4459511502782!2d78.7753114757918!3d14.800208972157202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb483a4d3046345%3A0xf72b1677b37805ec!2sYNS%20Convention%20Hall%20and%20Residency!5e0!3m2!1sen!2sin!4v1746272992629!5m2!1sen!2sin"
            height="300"
            className="border-0 rounded-lg"
            loading="eager"
          />
        }
      />
    </div>
  );
}

const complimentsFrom = [
  {
    name: "Mantrala Moinuddin",
    photo: "/assets/people/13.jpg",
  },
  {
    name: "Mantrala Munna",
    photo: "/assets/people/17.jpg",
  },
  {
    name: "Shaik Nazeer",
    photo: "/assets/people/12.jpg",
  },
  {
    name: "Syed Habeeb",
    photo: "/assets/people/23.jpg",
  },
  {
    name: "TP Nayab",
    photo: "/assets/people/10.png",
  },
  {
    name: "Adamsab Ismail",
    photo: "/assets/people/16.jpg",
  },
  {
    name: "Adamsab Khaleel",
    photo: "/assets/people/14.jpg",
  },
  {
    name: "Abdul Saleem",
    photo: "/assets/people/22.jpg",
  },
  {
    name: "TP Riyaz",
    photo: "/assets/people/18.jpg",
  },
  {
    name: "Mantrala Nyamatullah",
    photo: "/assets/people/25.jpeg",
  },
  {
    name: "Mantrala Yusuf",
    photo: "/assets/people/24.jpg",
  },
  {
    name: "Mantrala Arif",
    photo: "/assets/people/21.jpg",
  },
  {
    name: "Shaik Hameed",
    photo: "/assets/people/7.png",
  },
  {
    name: "Syed Ghouse",
    photo: "/assets/people/19.jpg",
  },
  {
    name: "Shaik Afridi",
    photo: "/assets/people/6.png",
  },
  {
    name: "Abdul Samee",
    photo: "/assets/people/9.png",
  },
  {
    name: "Mohammad Umar",
    photo: "/assets/people/1.png",
  },
  {
    name: "Syed Noor",
    photo: "/assets/people/4.png",
  },
  {
    name: "Abdul Rahim",
    photo: "/assets/people/20.jpg",
  },
  {
    name: "Abdul Samad",
    photo: "/assets/people/8.png",
  },
  {
    name: "Shaik Rizwan",
    photo: "/assets/people/15.png",
  },
  {
    name: "Abdul Mathin",
    photo: "/assets/people/29.jpg",
  },
  {
    name: "TP Imran",
    photo: "/assets/people/31.jpg",
  },
  {
    name: "TP Irfan",
    photo: "/assets/people/30.jpg",
  },
  {
    name: "Shaik Mahir",
    photo: "/assets/people/11.png",
  },
  {
    name: "Shaik Rafath",
    photo: "/assets/people/5.png",
  },
  {
    name: "Mantrala Ayan",
    photo: "/assets/people/27.jpg",
  },
  {
    name: "Abdullah",
    photo: "/assets/people/3.png",
  },
  {
    name: "Fardaan",
    photo: "/assets/people/2.png",
  },
  {
    name: "Abdul Rehman",
    photo: "/assets/people/26.jpg",
  },
];

function BestCompliments() {
  return (
    <div className="mt-10 bg-white p-4 w-full">
      <h3 className="text-3xl ubuntu-bold text-[#1D4B4A] text-center">
        With Best Compliments from
      </h3>
      <div className="flex flex-wrap  gap-4 mt-4 items-center justify-center w-full align-top">
        {complimentsFrom.map((compliment) => {
          return (
            <div
              className="flex flex-col items-center p-2"
              key={compliment.name}
            >
              <img
                src={compliment.photo}
                className="w-40 h-40 rounded-full border-2 border-[#C4A661] shadow-md object-cover"
                alt={compliment.name}
              />
              <p className="text-2xl ubuntu-bold text-[#1D4B4A] mt-2">
                {compliment.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function RecptionPage() {
  return (
    <div className="reception_page">
      <Heading />
      <Content />
      <Events />

      <BestCompliments />

      <div className="mt-15 flex w-full items-end align-bottom">
        <img
          src="https://views-counter.vercel.app/badge?pageId=fayaz_reception_rokha"
          alt="Views Counter"
        />
      </div>
    </div>
  );
}
