type DetailProps = {
  name: string;
  content: string;
};

export const Detail = ({ content, name }: DetailProps) => (
  <>
    <div>{name}</div>
    <div className="text-xs">{content}</div>
  </>
);
