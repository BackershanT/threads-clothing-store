export interface SizeChart {
  size: string;
  bust: string; // in inches
  waist: string; // in inches
  hip: string; // in inches
}

export interface BodyMeasurementGuide {
  id: string;
  title: string;
  description: string;
  tips: string[];
}

export const sizeChart: SizeChart[] = [
  { size: 'XS', bust: '32-33"', waist: '24-25"', hip: '34-35"' },
  { size: 'S', bust: '34-35"', waist: '26-27"', hip: '36-37"' },
  { size: 'M', bust: '36-37"', waist: '28-29"', hip: '38-39"' },
  { size: 'L', bust: '38-39"', waist: '30-31"', hip: '40-41"' },
  { size: 'XL', bust: '40-42"', waist: '32-34"', hip: '42-44"' },
  { size: 'XXL', bust: '43-45"', waist: '35-37"', hip: '45-47"' },
];

export const bodyMeasurementGuide: BodyMeasurementGuide[] = [
  {
    id: 'bust',
    title: 'Bust',
    description: 'Measure around the fullest part of your bust, keeping the tape measure parallel to the floor.',
    tips: [
      'Wear a fitted bra or no bra',
      'Keep the tape measure level',
      'Don\'t pull too tight'
    ]
  },
  {
    id: 'waist',
    title: 'Waist',
    description: 'Measure around your natural waistline, which is the narrowest part of your torso.',
    tips: [
      'Stand relaxed and breathe normally',
      'Place tape measure around your waist',
      'Don\'t pull too tight'
    ]
  },
  {
    id: 'hip',
    title: 'Hip',
    description: 'Measure around the fullest part of your hips, keeping the tape measure parallel to the floor.',
    tips: [
      'Keep feet together',
      'Stand straight',
      'Keep tape measure level'
    ]
  }
];