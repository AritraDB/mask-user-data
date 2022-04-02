function maskUserData(originalData, visibleDigits, maskSymbol) {
    if (originalData.length > visibleDigits) {
        const maskedSection = originalData.slice(0, -visibleDigits);
        const visibleSection = originalData.slice(-visibleDigits);
        return maskedSection.replace(/./g, maskSymbol ? maskSymbol : '*') + visibleSection;
      } else {
        return originalData;
      }
  }
  
  module.exports = maskUserData