import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const dates = [
  {
    id: 1,
    name: "بسم الله الرحمن الرحيم { ان الدين عند الله الاسلام } صدق الله العظيم",
  },
  {
    id: 2,
    name: "قال رسول الله صلى الله عليه و سلم { افضل الاعمال ايمان بالله و رسوله } ثم بعد هذا ",
  },
  { id: 3, name: "بسم الله الرحمن الرحيم  " },
  { id: 4, name: "انا لله و انا اليه راجعون" },
  {
    id: 5,
    name: "بسم الله { قال الله تعالى : ان الدين عند الله هو الاسلام } صدق الله العظيم",
  },
  {
    id: 6,
    name:
      "وقولها: ({أَحْيَا اللَّيْلَ}) أي: استغرقه بالسهر في الصلاة وغيرها. " +
      " وقولها: ({وَأَيْقَظَ أَهْلَهُ}) أي: أيقظهم للصلاة في الليل وجدوا في العبادة زيادة على العادة.",
  },
];

// const DateList = ({ dates }) => {
//   return (
//     <ul>
//       {dates.map((date) => (
//         <li key={date.id}>{date.name}</li>
//       ))}
//     </ul>
//   );
// };

// const DateList = ({ dates }) => {
//   return (
//     <ul>
//       {dates.map((date) => (
//         <li key={date.id}>
//           {date.name.split("{").map((text, index) => (
//             <>
//               {index > 0 && (
//                 <span style={{ color: "blue", fontWeight: "bold" }}>{"{"}</span>
//               )}
//               <span>{text}</span>
//               {index > 0 && (
//                 <span style={{ color: "blue", fontWeight: "bold" }}>{"}"}</span>
//               )}
//             </>
//           ))}
//         </li>
//       ))}
//     </ul>
//   );
// };

const style = {
  // backgroundColor: "transparent",
  // color: "#333333",
};

const DateList = ({ dates }) => {
  const regex = /{([^}]+)}/g;

  return (
    <ul>
      {dates.map((date) => (
        <li key={date.id}>
          <SyntaxHighlighter
            language="javascript"
            style={a11yDark}
            customStyle={style}
          >
            {date.name.replace(
              regex,
              (match, group) => `{${group.split(" ").join("_")}}`
            )}
          </SyntaxHighlighter>
        </li>
      ))}
    </ul>
  );
};

// -----------------

const highlightKeywords = (text, keywords) => {
  const regexKeywords = new RegExp(`(${keywords.join("|")})`, "gi");
  const regexInsideParentheses = /{([^}]+)}/g;

  return text
    .replace(
      regexKeywords,
      '<span style="color: red; font-weight: bold;">$1</span>'
    )
    .replace(
      regexInsideParentheses,
      '<span style="color: blue; font-weight: bold;">$1</span>'
    );
};

function App() {
  const keywords = ["الله", "رسول الله"];
  return (
    <>
      <DateList dates={dates} />
      <hr />
      <hr />
      <div>
        {dates.map((item) => {
          const regex = /{([^}]+)}/g;
          const nameWithHighlight = item.name.replace(
            regex,
            '<span style="color: green; font-weight: bold;">$1</span>'
          );
          return (
            <div key={item.id}>
              <p dangerouslySetInnerHTML={{ __html: nameWithHighlight }}></p>
            </div>
          );
        })}
      </div>
      <hr />
      <hr />
      <div>
        {dates.map((item) => {
          const nameWithHighlight = highlightKeywords(item.name, keywords);
          return (
            <div key={item.id}>
              <p dangerouslySetInnerHTML={{ __html: nameWithHighlight }}></p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
