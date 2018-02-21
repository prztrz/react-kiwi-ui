// @flow

import * as React from "react";

const sizes = {
  large: 16,
  small: 12,
  normal: 14,
};

const colors = {
  primary: "#46515D",
  secondary: "#8091A7",
  attention: "#171B1E",
  error: "#D02228",
};

const additionalVariants = {
  bold: "font-weight: bold;",
  normal: "",
};

type Props = {
  size: "large" | "small" | "normal",
  type: "primary" | "secondary" | "attention" | "error",
  variant: "bold" | "normal",
  children: React.Node,
};

const Typography = (props: Props) => (
  <span>
    {props.children}
    <style jsx>{`
      span {
        font-family: Roboto, -apple-system, sans-serif;
        font-size: ${sizes[props.size]}px;
        color: ${colors[props.type]};
        ${additionalVariants[props.variant]};
      }
    `}</style>
  </span>
);

Typography.defaultProps = {
  size: "normal",
  type: "primary",
};

export default Typography;
