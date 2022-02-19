type ListProps = {
  items: string[];
  onClickItem: (item: string) => void;
};

export const List = ({ items, onClickItem }: ListProps) => (
  <ul>
    {items.map((p) => (
      <li className="text" key={p}>
        <div onClick={() => onClickItem(p)}>{p}</div>
      </li>
    ))}
  </ul>
);
