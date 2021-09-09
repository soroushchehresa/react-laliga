import React from "react";
import _ from "lodash";
import { ListChildComponentProps } from "react-window";
import "./styles.css";

interface MatchItemData {
  team1: string,
  team2: string,
  date: string,
  round: string,
  score: {
    ft: number[]
  }
}

const MatchItem = ({ index, style, data }: ListChildComponentProps<MatchItemData>) => (
  <div className={`${index % 2 ? "match-item-odd" : "match-item-even"} match-item`} style={style}>
    <div className="match-wrapper">
      <div className="title-wrapper">
        <h3 className="item-title">{`🕒 ${_.get(data, [index, 'round'])}`}</h3>
        <h3 className="item-title">{`📅 ${_.get(data, [index, 'date'])}`}</h3>
      </div>
      <div className="team-item">
        <p className="team-name">
          {_.get(data, [index, 'team1'])}
        </p>
        <span className="team-score">
          {_.get(data, [index, 'score', 'ft', 0])}
        </span>
      </div>
      <div className="team-item">
        <p className="team-name">
          {_.get(data, [index, 'team2'])}
        </p>
        <span className="team-score">
          {_.get(data, [index, 'score', 'ft', 1])}
        </span>
      </div>
    </div>
  </div>
);

export default MatchItem;
