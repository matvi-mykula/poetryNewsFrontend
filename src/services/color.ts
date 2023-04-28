function getColor(sentiment: number) {
  // Map sentiment to a range of RGB values between light blue and light red
  const minSentiment = -1;
  const maxSentiment = 1;
  const maxColor = [100, 200, 255]; // Light blue
  const minColor = [255, 100, 155]; // Light red
  const r = Math.round(
    (maxColor[0] - minColor[0]) *
      ((sentiment - minSentiment) / (maxSentiment - minSentiment)) +
      minColor[0]
  );
  const g = Math.round(
    (maxColor[1] - minColor[1]) *
      ((sentiment - minSentiment) / (maxSentiment - minSentiment)) +
      minColor[1]
  );
  const b = Math.round(
    (maxColor[2] - minColor[2]) *
      ((sentiment - minSentiment) / (maxSentiment - minSentiment)) +
      minColor[2]
  );

  // Convert RGB values to hex code
  const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}

export { getColor };
