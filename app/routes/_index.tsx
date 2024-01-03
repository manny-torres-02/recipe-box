import type { MetaFunction } from "@remix-run/node";
import Nav from "./components/nav";
import "../app.css"

export const meta: MetaFunction = () => {
  return [
    { title: "The Recipe Box" },
    { name: "The Recipe Box", content: "Welcome to the Recipe Box" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>

      <h1>Welcome to the Recipe Box!</h1>
      <h2> This is the home Page</h2>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <Nav />
    </div>
  );
}
