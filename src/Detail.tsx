import ReactMarkdown from "react-markdown";

type DetailProps = {
  name: string;
  content: string;
};

export const Detail = ({ content, name }: DetailProps) => (
  <>
    {/* <h1 className="text-xl mb-4">{name}</h1> */}
    <ReactMarkdown className="prose">{content}</ReactMarkdown>
  </>
);
