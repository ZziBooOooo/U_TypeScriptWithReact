import React, { ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  severity?: "low" | "medium" | "high"; // optional 지정
  children: ReactNode;
};

const InfoBox = ({ mode, severity, children }: InfoBoxProps) => {
  // info, warning - 2version
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      {mode === "warning" ? <h2>Warning</h2> : null}
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
