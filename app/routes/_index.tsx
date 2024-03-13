import type { MetaFunction } from "@remix-run/node";
import "../app.css";

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
    </div>
  );
}
