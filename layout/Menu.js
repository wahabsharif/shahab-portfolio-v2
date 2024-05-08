import Link from "next/link";

const MultiMenu = () => {
  return (
    <ul className="navigation text-center clearfix">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
      <li>
        <Link href="/services">services</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="contact">Contact</Link>
      </li>
    </ul>
  );
};
export default MultiMenu;

// export const OnePageMenu = () => {
//   return (
//     <ul className="navigation onepage clearfix">
//       <li>
//         <a href="#home">Home</a>
//       </li>
//       <li>
//         <a href="#about">about</a>
//       </li>
//       <li>
//         <a href="#resume">Resume</a>
//       </li>
//       <li>
//         <a href="#services">services</a>
//       </li>
//       <li>
//         <a href="#skills">skills</a>
//       </li>
//       <li>
//         <a href="#portfolio">projects</a>
//       </li>
//       <li>
//         <a href="#blog">blog</a>
//       </li>
//       <li>
//         <a href="#contact">Contact</a>
//       </li>
//     </ul>
//   );
// };
