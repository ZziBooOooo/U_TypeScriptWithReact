import React, { ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
  const { children, mode } = props;

  // info, warning - 2version
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      {mode === "warning" ? <h2>Warning</h2> : null}
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
