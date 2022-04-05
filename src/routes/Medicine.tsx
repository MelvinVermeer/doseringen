import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import raw from "../data/data.json";
import { Detail } from "../Detail";

export const Medicine = () => {
  const { name } = useParams();
  const data = raw as Record<string, any>;

  const file_name = "ace.md";
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../data/${name}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  if (post === "") {
    return <div>loading...</div>;
  }

  return <Detail content={post} name={name!} />;
};
