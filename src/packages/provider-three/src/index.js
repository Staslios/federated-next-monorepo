import React, { useEffect, useState } from "react"
import "./styles.css"

const Description = ({desc = "default desc"}) => {

  const [mounted, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mounted) return null;

  return <div className={"desc"}>{desc}</div>
}

export default Description