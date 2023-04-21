const chromaticScaleObj = {
  C: 1,
  "C#": 2,
  D: 3,
  "D#": 4,
  E: 5,
  F: 6,
  "F#": 7,
  G: 8,
  "G#": 9,
  A: 10,
  "A#": 11,
  B: 12,
};

const chromaticScaleArr = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
]


const note = 'A'

const transpose = (progression: string[], sumNumber: number) => {


  const newArr = progression.map((note) => {
    const position = chromaticScaleObj[note]
    let newPosition = position + sumNumber
    
    if (newPosition > 12) {
      newPosition -= 12  
    }
  
    if (newPosition < 1) {
      newPosition += 12
    }
    
    return chromaticScaleArr[newPosition - 1]
  })

  return newArr
}

const dummyProgression = ['C#', 'G#', 'A#', 'F#']

const result = transpose(dummyProgression, 1)

export {result}