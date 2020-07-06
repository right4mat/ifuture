import React from "react";
import Context from "./Context";

export default function Provider(props) {
  const [finish, setFinish] = React.useState(false);

  const [globalEmail, setGlobalEmail] = React.useState("");

  return (
    <Context.Provider
      value={{
        finish,
        setFinish,
        globalEmail,
        setGlobalEmail,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
