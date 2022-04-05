import { useParams } from "react-router-dom";
import { Detail } from "../Detail";
import raw from "../data/generated.json";

export const Medicine = () => {
  const { name } = useParams();
  const data = raw as Record<string, any>;
  const { content } = data.find((x: any) => x.url === name);

  return <Detail content={content} name={name!} />;
};
