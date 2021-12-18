import React from 'react';

import './Panel.css';

export default function Panel({ text }) {
  return (
    <div className="panel-container">
      {text}
    </div>
  )
}