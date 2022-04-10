import ReactMarkdown from "react-markdown";

type DetailProps = {
  name: string;
  content: string;
};

export const Detail = ({ content, name }: DetailProps) => (
  <ReactMarkdown className="mt-2 mx-4 prose">{content}</ReactMarkdown>
);
