import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Template" },
    { name: "description", content: "Welcome to React Template!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
