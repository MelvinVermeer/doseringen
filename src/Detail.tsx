type DetailProps = {
  name: string;
  content: string;
};

export const Detail = ({ content, name }: DetailProps) => (
  <>
    <h1 className="text-xl mb-4">{name}</h1>
    <div>{content}</div>
  </>
);
