import { Inter } from "@next/font/google";
import { Button } from "semantic-ui-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </div>
    </div>
  );
}
