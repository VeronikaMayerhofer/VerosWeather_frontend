import React, { useState } from "react";

interface ListItem {
    key: string;
    value: string;
}
interface Props {
  heading: string;
  items: ListItem[];
  onSelectItem: (key: string) => void;
}

const ListGroup: React.FC<Props> = ({ heading, items, onSelectItem }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

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
