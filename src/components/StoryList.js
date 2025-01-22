import React from 'react';

const StoryList = ({ stories }) => {
  return (
    <div className="stories">
      <p>{stories}</p>
    </div>
  );
};

export default StoryList;