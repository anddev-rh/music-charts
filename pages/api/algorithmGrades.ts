import {
  chromaticDegrees,
  chromaticScaleFlat,
  chromaticScaleFlatIndex,
  chromaticScaleSharp,
  chromaticScaleSharpIndex,
} from "./constants/degrees-and-scales";

import { note } from "./types";

const getChromaticScale = (key: note) => {
  return chromaticScaleSharp.includes(key)
    ? {
        scale: [...chromaticScaleSharp],
        index: { ...chromaticScaleSharpIndex },
      }
    : {
        scale: [...chromaticScaleFlat],
        index: { ...chromaticScaleFlatIndex },
      };
};

const getChords = (songDegrees: string[], key: note) => {
  const { scale, index } = getChromaticScale(key);
  const keyNumber = index[key] - 1;

  const chords = songDegrees.map((chord) => {
    let position = chromaticDegrees[chord] + keyNumber;

    if (position > 12) position -= 12;
    if (position < 1) position += 12;

    return scale[position - 1];
  });

  return chords;
};

const result = getChords(["I", "V", "VI", "IV"], "Bb");

const output = result;

export { output };
