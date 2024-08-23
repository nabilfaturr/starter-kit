import { Text, Heading, CustomLink } from "@/components/shared/Typography";

const DemoText: React.FC = () => {
  return (
    <div className="space-y-4 py-10 rounded-lg max-w-screen-md">
      <Heading className="pb-6">Next js Starter</Heading>
      <Heading variant="subtitle" headingLevel="h2">
        What is Nextjs?
      </Heading>
      <Text>
        <CustomLink href={"https://nextjs.org/"}>Next js</CustomLink> is an
        open-source web development framework created by the private company
        Vercel providing React-based web applications with server-side rendering
        and static website generation.
      </Text>
      <Text variant={"highlight"}>
        {`Next.js is a React-based framework that allows developers to build
        websites and web applications with zero configuration.`}
      </Text>
      <Text variant="caption">
        {`React documentation mentions Next.js among "Recommended Toolchains"
        advising it to developers when "building a server-rendered website with
        Node.js".[6] Where traditional React apps can only render their content
        in the client-side browser, Next.js extends this functionality to
        include applications rendered on the server-side.`}
      </Text>
      <Text>
        Next.js also includes support for server-side rendering and static
        website generation.
      </Text>
      <Text>
        {`Google has contributed to the Next.js project, including 43 pull requests in 2019.[14] As of March 2022, the framework is used by many large websites, including Walmart, Apple, Nike, Netflix, TikTok, Uber, Lyft, and Starbucks.[10] In early 2020, Vercel raised $21 million in Series A funding to support improvements to the software.[1] The framework's original author, Guillermo Rauch, is currently the CEO of Vercel, and the project's lead maintainer is Tim Neutkens.[15]`}
      </Text>
      <Heading variant="subtitle" headingLevel="h2">
        Development History
      </Heading>
      <Text>
        {`Next.js was first released as an open-source project on GitHub on October 25, 2016.[3] It was originally developed based on six principles: out-of-the-box functionality requiring no setup, JavaScript everywhere, all functions are written in JavaScript, automatic code-splitting and server-rendering, configurable data-fetching, anticipating requests, and simplifying deployment.[16]`}
      </Text>
      <Text>
        {`Next.js 2.0 was announced in March 2017 including several improvements that made it easier to work with small websites. It also increased the build efficiency and improved the scalability of the hot-module replacement feature.[17]`}
      </Text>
      <Text>
        {`Version 7.0 was released in September 2018 with improved error handling and support for React's context API for improved dynamic route handling. This was also the first version to upgrade to Webpack 4.[18]`}
      </Text>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3">
      <DemoText />
    </main>
  );
}
