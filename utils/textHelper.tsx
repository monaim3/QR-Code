import React from "react";

export const renderTranslation = (
  text: string,
  components: Record<string, (children: React.ReactNode) => React.ReactNode>
): React.ReactNode => {
  const regex = /<(\w+)>([^<]*)<\/\1>/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    const [full, tag, content] = match;

    // text before tag
    if (match.index > lastIndex) {
      parts.push(
        <span key={`t-${key++}`}>
          {text.slice(lastIndex, match.index)}
        </span>
      );
    }

    // component
    if (components[tag]) {
      parts.push(
        <React.Fragment key={`c-${key++}`}>
          {components[tag](content)}
        </React.Fragment>
      );
    } else {
      parts.push(
        <span key={`u-${key++}`}>{full}</span>
      );
    }

    lastIndex = regex.lastIndex;
  }

  // remaining text
  if (lastIndex < text.length) {
    parts.push(
      <span key={`t-${key++}`}>
        {text.slice(lastIndex)}
      </span>
    );
  }

  return <>{parts}</>;
};