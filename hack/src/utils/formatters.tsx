
export const formatFieldName = (fieldName: string): string => {
    // Convert camelCase to space-separated words and capitalize the first letter
    const formatted = fieldName
      .replace(/([A-Z])/g, ' $1')  // Add space before capital letters
      .replace(/^./, (str) => str.toUpperCase());  // Capitalize first letter
    
    return formatted;
  };