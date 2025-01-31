import { FC } from "react";
import Card from "../Card/Card";
import { CardData } from "../Card/types";
import "./CardGrid.scss";

interface CardGridProps {
  cards: CardData[];
}

const CardGrid: FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
