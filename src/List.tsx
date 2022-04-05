import { Link } from "react-router-dom";

type ListProps = {
  items: string[];
};

export const List = ({ items }: ListProps) => (
  <ul>
    {items.map((p) => (
      <li className="text" key={p}>
        <Link to={`/medicine/${p}`} className=" h-10 grid place-items-center">
          {p}
        </Link>
      </li>
    ))}
  </ul>
);
