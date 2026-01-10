'use client';

import React, { useState } from 'react';
import { sizeChart, bodyMeasurementGuide } from '@/src/data/sizeGuideData';

const SizeGuidePage: React.FC = () => {
  const [bustMeasurement, setBustMeasurement] = useState<string>('');
  const [waistMeasurement, setWaistMeasurement] = useState<string>('');
  const [hipMeasurement, setHipMeasurement] = useState<string>('');
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);

  const calculateSize = () => {
    if (!bustMeasurement || !waistMeasurement || !hipMeasurement) {
      alert('Please enter all measurements');
      return;
    }

    // Convert measurements to numbers for comparison
    const bust = parseFloat(bustMeasurement);
    const waist = parseFloat(waistMeasurement);
    const hip = parseFloat(hipMeasurement);

    if (isNaN(bust) || isNaN(waist) || isNaN(hip)) {
      alert('Please enter valid numbers for all measurements');
      return;
    }

    // Find the size that fits all measurements (or closest)
    let sizeMatch = null;
    for (const size of sizeChart) {
      // Extract numeric values from size ranges (e.g., "32-33" -> 32 and 33)
      const bustRange = size.bust.replace('"', '').split('-').map(Number);
      const waistRange = size.waist.replace('"', '').split('-').map(Number);
      const hipRange = size.hip.replace('"', '').split('-').map(Number);

      // Check if measurement fits in range
      const fitsBust = bust >= bustRange[0] && bust <= bustRange[bustRange.length - 1];
      const fitsWaist = waist >= waistRange[0] && waist <= waistRange[waistRange.length - 1];
      const fitsHip = hip >= hipRange[0] && hip <= hipRange[hipRange.length - 1];

      // If all measurements fit, use this size
      if (fitsBust && fitsWaist && fitsHip) {
        sizeMatch = size.size;
        break;
      }

      // If not exact fit, find closest size
      if (!sizeMatch) {
        // Check if measurement is within range or just outside
        const bustInRange = bust >= bustRange[0] - 1 && bust <= bustRange[bustRange.length - 1] + 1;
        const waistInRange = waist >= waistRange[0] - 1 && waist <= waistRange[waistRange.length - 1] + 1;
        const hipInRange = hip >= hipRange[0] - 1 && hip <= hipRange[hipRange.length - 1] + 1;

        if (bustInRange && waistInRange && hipInRange) {
          sizeMatch = size.size;
        }
      }
    }

    if (sizeMatch) {
      setRecommendedSize(sizeMatch);
    } else {
      // If no exact fit, recommend closest size
      const allSizes = [...sizeChart];
      allSizes.sort((a, b) => {
        // Calculate distance from user measurements to each size range
        const aBustRange = a.bust.replace('"', '').split('-').map(Number);
        const bBustRange = b.bust.replace('"', '').split('-').map(Number);
        const aWaistRange = a.waist.replace('"', '').split('-').map(Number);
        const bWaistRange = b.waist.replace('"', '').split('-').map(Number);
        const aHipRange = a.hip.replace('"', '').split('-').map(Number);
        const bHipRange = b.hip.replace('"', '').split('-').map(Number);

        // Calculate average distance for each size
        const aBustDist = Math.min(
          Math.abs(bust - aBustRange[0]),
          Math.abs(bust - aBustRange[aBustRange.length - 1])
        );
        const bBustDist = Math.min(
          Math.abs(bust - bBustRange[0]),
          Math.abs(bust - bBustRange[bBustRange.length - 1])
        );

        const aWaistDist = Math.min(
          Math.abs(waist - aWaistRange[0]),
          Math.abs(waist - aWaistRange[aWaistRange.length - 1])
        );
        const bWaistDist = Math.min(
          Math.abs(waist - bWaistRange[0]),
          Math.abs(waist - bWaistRange[bWaistRange.length - 1])
        );

        const aHipDist = Math.min(
          Math.abs(hip - aHipRange[0]),
          Math.abs(hip - aHipRange[aHipRange.length - 1])
        );
        const bHipDist = Math.min(
          Math.abs(hip - bHipRange[0]),
          Math.abs(hip - bHipRange[bHipRange.length - 1])
        );

        const aTotalDist = aBustDist + aWaistDist + aHipDist;
        const bTotalDist = bBustDist + bWaistDist + bHipDist;

        return aTotalDist - bTotalDist;
      });

      setRecommendedSize(allSizes[0].size);
    }
  };

  const resetCalculator = () => {
    setBustMeasurement('');
    setWaistMeasurement('');
    setHipMeasurement('');
    setRecommendedSize(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center tracking-wide">
            SIZE GUIDE
          </h1>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm mb-12">
            <p className="text-gray-700 mb-6 text-center">
              Depending on your body measurements, please refer to the table below to determine your size.
            </p>
            {/* <p className="text-gray-700 mb-6 text-center italic">
              Please note: These are body measurements and not the garment measurement.
            </p> */}
            
          
          </div>
  {/* Body Measurement Guide */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-6 text-center">How to Measure</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bodyMeasurementGuide.map((guide) => (
                <div key={guide.id} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">{guide.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{guide.description}</p>
                  <ul className="space-y-2">
                    {guide.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-500 mr-2">•</span>
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                  
               
                </div>
              ))}
            </div>
          </div>

              {/* Size Chart */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-light text-gray-900 mb-6 text-center">Size Chart</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">Size</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">Bust</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">Waist</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">Hip</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sizeChart.map((size, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{size.size}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{size.bust}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{size.waist}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{size.hip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Size Calculator */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-6 text-center">Size Calculator</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Bust (inches)</label>
                <input
                  type="number"
                  value={bustMeasurement}
                  onChange={(e) => setBustMeasurement(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
                  placeholder="e.g. 36"
                  min="0"
                  step="0.1"
                  inputMode="decimal"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Waist (inches)</label>
                <input
                  type="number"
                  value={waistMeasurement}
                  onChange={(e) => setWaistMeasurement(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
                  placeholder="e.g. 28"
                  min="0"
                  step="0.1"
                  inputMode="decimal"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Hip (inches)</label>
                <input
                  type="number"
                  value={hipMeasurement}
                  onChange={(e) => setHipMeasurement(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
                  placeholder="e.g. 38"
                  min="0"
                  step="0.1"
                  inputMode="decimal"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={calculateSize}
                className="bg-black text-white px-6 py-3 text-base font-medium hover:bg-gray-800 transition-colors"
              >
                Find My Size
              </button>
              <button
                onClick={resetCalculator}
                className="border border-gray-300 text-gray-700 px-6 py-3 text-base font-medium hover:bg-gray-50 transition-colors"
              >
                Reset
              </button>
            </div>
            
            {recommendedSize && (
              <div className="mt-6 p-4 bg-gray-50 rounded text-center">
                <p className="text-lg text-gray-900">
                  Recommended Size: <span className="font-semibold text-xl">{recommendedSize}</span>
                </p>
              </div>
            )}
          </div>

        
      
        </div>
      </div>
    </div>
  );
};

export default SizeGuidePage;