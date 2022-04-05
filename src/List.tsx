import { Link } from "react-router-dom";

type ListProps = {
  items: any[];
};

export const List = ({ items }: ListProps) => (
  <ul>
    {items.map((p, i) => (
      <li className="text" key={i}>
        <Link
          to={`/medicine/${p.url}`}
          className="h-10 grid place-items-center"
        >
          {p.title}
        </Link>
      </li>
    ))}
  </ul>
);
