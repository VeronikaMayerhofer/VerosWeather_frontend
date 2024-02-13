import { useState } from "react";

interface ListItem<T,> {
    key: T;
    value: string;
}
interface Props<T extends string,> {
  heading: string;
  items: ListItem<T>[];
  onSelectItem: (key: T) => void;
}

const ListGroup = <T extends string>({ heading, items, onSelectItem }: Props<T>) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h2>{heading}</h2>
      <ul className="list-group">
        {items.map((item, index) => (
            <li
                className={
                    selectedIndex === index
                        ? "list-group-item active"
                        : "list-group-item"
                }
                key={item.key}
                onClick={() => {
                    setSelectedIndex(index);
                    onSelectItem(item.key);
                }}
            >
                {item.value}
            </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
