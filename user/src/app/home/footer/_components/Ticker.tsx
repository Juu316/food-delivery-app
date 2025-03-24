"use client";
import React from "react";

interface TickerProps {
  items: string[];
}

const Ticker: React.FC<TickerProps> = ({ items }) => {
  return (
    <div className="ticker-container">
      <div className="ticker-content">
        {items.map((item, index) => (
          <span key={index} className="ticker-item">
            {item}
          </span>
        ))}
        {items.map((item, index) => (
          <span key={`duplicate-${index}`} className="ticker-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;