import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const PaymentTermsSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState('Net 30 Days');

  const terms = [
    'Net 1 Day',
    'Net 7 Days',
    'Net 14 Days',
    'Net 30 Days'
  ];

  const handleSelect = (term) => {
    setSelectedTerm(term);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <label className="block text-gray7e mb-2.5 dark:text-grayDF text-sm">Payment Terms</label>
      <button
        type="button"
        className="w-full px-4 py-1.5 text-left bg-white dark:bg-blue25 dark:text-whiteF8 border rounded-lg flex items-center justify-between hover:border-gray7e"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-black0c dark:text-whiteF8 font-bold">{selectedTerm}</span>
        <ChevronDown 
          className={`w-5 h-5 text-purple7c transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-[#48549F40] shadow-lg z-10">
          {terms.map((term) => (
            <button
              key={term}
              type="button"
              className={`w-full px-4 py-3 text-left hover:text-purple7c transition-colors
                ${term === selectedTerm ? 'text-purple7c' : 'text-black0c'}`}
              onClick={() => handleSelect(term)}
            >
              {term}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentTermsSelect;