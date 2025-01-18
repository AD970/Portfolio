import React from "react";
import AnimatedCursor from "react-animated-cursor";
import Container from "@/components/Container";
import { ToastProvider } from "@/components/ui/ToastManager";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className=" ">
      <div className="hidden lg:block">
        <AnimatedCursor
          showSystemCursor={true}
          innerSize={0}
          outerSize={16}
          color="255, 255, 255"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={2}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            "Link",
            ".btn",
          ]}
        />
      </div>
      <Container />

    </div>
  );
}
