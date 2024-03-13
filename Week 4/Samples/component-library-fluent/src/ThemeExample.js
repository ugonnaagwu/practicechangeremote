import React from "react";
import {
  Button,
  Switch,
  Divider,
  FluentProvider,
} from "@fluentui/react-components";
import { createLightTheme } from "@fluentui/tokens";

const myNewTheme = {
  10: "#020401",
  20: "#111C0D",
  30: "#172F13",
  40: "#1A3C17",
  50: "#1E4B1A",
  60: "#20591C",
  70: "#23681F",
  80: "#247821",
  90: "#268824",
  100: "#269826",
  110: "#26A828",
  120: "#26B929",
  130: "#24CA2B",
  140: "#21DC2C",
  150: "#56EA4F",
  160: "#98F289",
};

const lightTheme = {
  ...createLightTheme(myNewTheme),
};

const ThemedExample = () => {
  return (
    <div style={{ padding: 15 }}>
      <FluentProvider theme={lightTheme}>
        <Button>DefaultButton</Button>
        <Button appearance="primary"> PrimaryButton </Button>
        <Switch label="Enabled" />
        <Switch label="Disabled" disabled={true} />
      </FluentProvider>
    </div>
  );
};

const NormalExample = () => {
  return (
    <div style={{ padding: 15 }}>
      <Button>DefaultButton</Button>
      <Button appearance="primary"> PrimaryButton </Button>
      <Switch label="Enabled" />
      <Switch label="Disabled" disabled={true} />
    </div>
  );
};

const myBadTheme = {
  colorNeutralForeground1: "#d3f53b",
  colorNeutralForeground1Hover: "#d3f53b",
  colorNeutralForeground1Pressed: "#d3f53b",
  colorNeutralForeground1Selected: "#d3f53b",
  colorNeutralForeground2: "#e4f987",
  colorNeutralForeground2Hover: "#d3f53b",
  colorNeutralForeground2Pressed: "#d3f53b",
  colorNeutralForeground2Selected: "#d3f53b",
  colorNeutralForeground2BrandHover: "#f20a57",
  colorNeutralForeground2BrandPressed: "#da094e",
  colorNeutralForeground2BrandSelected: "#f20a57",
  colorNeutralForeground3: "#f1fcc2",
  colorNeutralForeground3Hover: "#e4f987",
  colorNeutralForeground3Pressed: "#e4f987",
  colorNeutralForeground3Selected: "#e4f987",
  colorNeutralForeground3BrandHover: "#f20a57",
  colorNeutralForeground3BrandPressed: "#da094e",
  colorNeutralForeground3BrandSelected: "#f20a57",
  colorNeutralForeground4: "#babbc2",
  colorNeutralForegroundDisabled: "#b2b4ba",
  colorNeutralForegroundInvertedDisabled: "rgba(255, 255, 255, 0.4)",
  colorBrandForegroundLink: "#da094e",
  colorBrandForegroundLinkHover: "#b8074",
  colorBrandForegroundLinkPressed: "#880531",
  colorBrandForegroundLinkSelected: "#da094e",
  colorNeutralForeground2Link: "#e4f987",
  colorNeutralForeground2LinkHover: "#d3f53b",
  colorNeutralForeground2LinkPressed: "#d3f53b",
  colorNeutralForeground2LinkSelected: "#d3f53b",
  colorCompoundBrandForeground1: "#f20a57",
  colorCompoundBrandForeground1Hover: "#da094e",
  colorCompoundBrandForeground1Pressed: "#b8074",
  colorBrandForeground1: "#f20a57",
  colorBrandForeground2: "#da094e",
  colorBrandForeground2Hover: "#da094e",
  colorBrandForeground2Pressed: "#da094e",
  colorNeutralForeground1Static: "#d3f53b",
  colorNeutralForegroundStaticInverted: "#e4e6ed",
  colorNeutralForegroundInverted: "#e4e6ed",
  colorNeutralForegroundInvertedHover: "#e4e6ed",
  colorNeutralForegroundInvertedPressed: "#e4e6ed",
  colorNeutralForegroundInvertedSelected: "#e4e6ed",
  colorNeutralForegroundInverted2: "#e4e6ed",
  colorNeutralForegroundOnBrand: "#e4e6ed",
  colorNeutralForegroundInvertedLink: "#e4e6ed",
  colorNeutralForegroundInvertedLinkHover: "#e4e6ed",
  colorNeutralForegroundInvertedLinkPressed: "#e4e6ed",
  colorNeutralForegroundInvertedLinkSelected: "#e4e6ed",
  colorBrandForegroundInverted: "#f4266a",
  colorBrandForegroundInvertedHover: "#f7699",
  colorBrandForegroundInvertedPressed: "#f4266a",
  colorBrandForegroundOnLight: "#f20a57",
  colorBrandForegroundOnLightHover: "#da094e",
  colorBrandForegroundOnLightPressed: "#b8074",
  colorBrandForegroundOnLightSelected: "#b8074",
  colorNeutralBackground1: "#e4e6ed",
  colorNeutralBackground1Hover: "#dadce3",
  colorNeutralBackground1Pressed: "#c3c4cb",
  colorNeutralBackground1Selected: "#d1d3da",
  colorNeutralBackground2: "#dedfe7",
  colorNeutralBackground2Hover: "#dadce3",
  colorNeutralBackground2Pressed: "#c3c4cb",
  colorNeutralBackground2Selected: "#d1d3da",
  colorNeutralBackground3: "#dadce3",
  colorNeutralBackground3Hover: "#d1d3da",
  colorNeutralBackground3Pressed: "#babbc2",
  colorNeutralBackground3Selected: "#c3c4cb",
  colorNeutralBackground4: "#dadce3",
  colorNeutralBackground4Hover: "#dedfe7",
  colorNeutralBackground4Pressed: "#dadce3",
  colorNeutralBackground4Selected: "#e4e6ed",
  colorNeutralBackground5: "#d1d3da",
  colorNeutralBackground5Hover: "#dadce3",
  colorNeutralBackground5Pressed: "#dadce3",
  colorNeutralBackground5Selected: "#dedfe7",
  colorNeutralBackground6: "#d1d3da",
  colorNeutralBackgroundInverted: "#e4f987",
  colorNeutralBackgroundStatic: "#333333",
  colorNeutralBackgroundAlpha: "rgba(255, 255, 255, 0.5)",
  colorNeutralBackgroundAlpha2: "rgba(255, 255, 255, 0.8)",
  colorSubtleBackground: "transparent",
  colorSubtleBackgroundHover: "#dadce3",
  colorSubtleBackgroundPressed: "#c3c4cb",
  colorSubtleBackgroundSelected: "#d1d3da",
  colorSubtleBackgroundLightAlphaHover: "rgba(255, 255, 255, 0.8)",
  colorSubtleBackgroundLightAlphaPressed: "rgba(255, 255, 255, 0.5)",
  colorSubtleBackgroundLightAlphaSelected: "transparent",
  colorSubtleBackgroundInverted: "transparent",
  colorSubtleBackgroundInvertedHover: "rgba(0, 0, 0, 0.1)",
  colorSubtleBackgroundInvertedPressed: "rgba(0, 0, 0, 0.3)",
  colorSubtleBackgroundInvertedSelected: "rgba(0, 0, 0, 0.2)",
  colorTransparentBackground: "transparent",
  colorTransparentBackgroundHover: "transparent",
  colorTransparentBackgroundPressed: "transparent",
  colorTransparentBackgroundSelected: "transparent",
  colorNeutralBackgroundDisabled: "#dadce3",
  colorNeutralBackgroundInvertedDisabled: "rgba(255, 255, 255, 0.1)",
  colorNeutralStencil1: "#d1d3da",
  colorNeutralStencil2: "#dedfe7",
  colorNeutralStencil1Alpha: "rgba(0, 0, 0, 0.1)",
  colorNeutralStencil2Alpha: "rgba(0, 0, 0, 0.05)",
  colorBackgroundOverlay: "rgba(0, 0, 0, 0.4)",
  colorScrollbarOverlay: "rgba(0, 0, 0, 0.5)",
  colorBrandBackground: "#f20a57",
  colorBrandBackgroundHover: "#da094e",
  colorBrandBackgroundPressed: "#880531",
  colorBrandBackgroundSelected: "#b8074",
  colorCompoundBrandBackground: "#f20a57",
  colorCompoundBrandBackgroundHover: "#da094e",
  colorCompoundBrandBackgroundPressed: "#b8074",
  colorBrandBackgroundStatic: "#f20a57",
  colorBrandBackground2: "#fef5f8",
  colorBrandBackground2Hover: "#fef5f8",
  colorBrandBackground2Pressed: "#fef5f8",
  colorBrandBackground3Static: "#b8074",
  colorBrandBackground4Static: "#880531",
  colorBrandBackgroundInverted: "#e4e6ed",
  colorBrandBackgroundInvertedHover: "#fef5f8",
  colorBrandBackgroundInvertedPressed: "#fbb3cb",
  colorBrandBackgroundInvertedSelected: "#fdd6e3",
  colorNeutralCardBackground: "#fafafa",
  colorNeutralCardBackgroundHover: "#e4e6ed",
  colorNeutralCardBackgroundPressed: "#f5f5f5",
  colorNeutralCardBackgroundSelected: "#ebebeb",
  colorNeutralCardBackgroundDisabled: "#f0f0f0",
  colorNeutralStrokeAccessible: "#e4f987",
  colorNeutralStrokeAccessibleHover: "#e4f987",
  colorNeutralStrokeAccessiblePressed: "#e4f987",
  colorNeutralStrokeAccessibleSelected: "#f20a57",
  colorNeutralStroke1: "#babbc2",
  colorNeutralStroke1Hover: "#b2b4ba",
  colorNeutralStroke1Pressed: "#b2b4ba",
  colorNeutralStroke1Selected: "#b2b4ba",
  colorNeutralStroke2: "#c3c4cb",
  colorNeutralStroke3: "#dadce3",
  colorNeutralStrokeSubtle: "#c3c4cb",
  colorNeutralStrokeOnBrand: "#e4e6ed",
  colorNeutralStrokeOnBrand2: "#e4e6ed",
  colorNeutralStrokeOnBrand2Hover: "#e4e6ed",
  colorNeutralStrokeOnBrand2Pressed: "#e4e6ed",
  colorNeutralStrokeOnBrand2Selected: "#e4e6ed",
  colorBrandStroke1: "#f20a57",
  colorBrandStroke2: "#fbb3cb",
  colorBrandStroke2Hover: "#fbb3cb",
  colorBrandStroke2Pressed: "#fbb3cb",
  colorBrandStroke2Contrast: "#fbb3cb",
  colorCompoundBrandStroke: "#f20a57",
  colorCompoundBrandStrokeHover: "#da094e",
  colorCompoundBrandStrokePressed: "#b8074",
  colorNeutralStrokeDisabled: "#c3c4cb",
  colorNeutralStrokeInvertedDisabled: "rgba(255, 255, 255, 0.4)",
  colorTransparentStroke: "transparent",
  colorTransparentStrokeInteractive: "transparent",
  colorTransparentStrokeDisabled: "transparent",
  colorNeutralStrokeAlpha: "rgba(0, 0, 0, 0.05)",
  colorNeutralStrokeAlpha2: "rgba(255, 255, 255, 0.2)",
  colorStrokeFocus1: "#e4e6ed",
  colorStrokeFocus2: "#768921",
  colorNeutralShadowAmbient: "rgba(0,0,0,0.12)",
  colorNeutralShadowKey: "rgba(0,0,0,0.14)",
  colorNeutralShadowAmbientLighter: "rgba(0,0,0,0.06)",
  colorNeutralShadowKeyLighter: "rgba(0,0,0,0.07)",
  colorNeutralShadowAmbientDarker: "rgba(0,0,0,0.20)",
  colorNeutralShadowKeyDarker: "rgba(0,0,0,0.24)",
  colorBrandShadowAmbient: "rgba(0,0,0,0.30)",
  colorBrandShadowKey: "rgba(0,0,0,0.25)",
};

const HeadacheExample = () => {
  return (
    <div style={{ padding: 15 }}>
      <FluentProvider theme={myBadTheme}>
        <Button>DefaultButton</Button>
        <Button appearance="primary"> PrimaryButton </Button>
        <Switch label="Enabled" />
        <Switch label="Disabled" disabled={true} />
      </FluentProvider>
    </div>
  );
};

const ThirdExample = () => {
  return (
    <div>
      <Divider>FluentUI that uses a default theme</Divider>
      <NormalExample />
      <Divider>Styled FluentUI:</Divider>
      <ThemedExample />
      <Divider>Headache Inducing Style:</Divider>
      <HeadacheExample />
    </div>
  );
};
export default ThirdExample;
