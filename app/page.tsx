import { BlogPosts } from "app/components/posts";
import { List } from "./components/list";

const workExperience = [
  {
    title: "Medycyna Praktyczna Sp. z.o.o",
    description:
      "Developed multiple medical calculators by transforming complex medical formulas into interactive React components for mp.pl/kalkulatory. Built reusable UI components for premium.mp.pl using Next.js and the shadcn/ui library. Documented components and their variations in Storybook, and managed applications and shared libraries within an Nx monorepo for scalable development. ",
    startDate: "November 2023",
    endDate: "now",
  },
  {
    title: "Vector Software Group S.A.",
    description:
      "I have successfully contributed to and enhanced two projects: CityCard and RailwayHub. In the CityCard project, I leveraged the SkiaSharp library to implement dynamic card layout editing, providing users with a real-time editing experience. Additionally, I introduced a subaccount feature for parent accounts. In the RailwayHub project I integrated with the Polregio API by utilizing SOAP API. Integrated with Polregio TCO service, which returned ticket certificates in DataMatrix format. ",
    startDate: "October 2022",
    endDate: "September 2023",
  },
  {
    title: "Essato Poland Sp. z.o.o",
    description:
      "Summer internship that focused on building an app that counted employee's vacation days  in .NET technology",
    startDate: "June 2022",
    endDate: "September 2022",
  },
];

export default function Page() {
  return (
    <section>
      <p className="mb-4">
        Web developer specializing in building <strong>fast</strong>,{" "}
        <strong>responsive</strong> and <strong>SEO-friendly</strong> websites
        using React and Next.js.
      </p>
      <div className="my-20">
        <p className="text-[2rem]">Work Experience</p>
        <List posts={workExperience} />
      </div>
    </section>
  );
}
