import { useParams } from "react-router-dom";
import raw from "../data/sample.json";
import { Detail } from "../Detail";

export const Medicine = () => {
  const { name } = useParams();
  const data = raw as Record<string, string>;

  return <Detail content={data[name!]} name={name!} />;
};
