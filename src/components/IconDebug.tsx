"use client";

// A simple component to debug the FontAwesome icon structure
import React, { useEffect } from 'react';
import { faHeart } from '@fortawesome/pro-solid-svg-icons';

export function IconDebug() {
  useEffect(() => {
    // Log the structure of a FontAwesome icon object
    console.log('FontAwesome icon object structure:');
    console.log(faHeart);
    console.log('Properties:', Object.keys(faHeart));
    console.log('Prototype:', Object.getPrototypeOf(faHeart));
    
    // Test Object.entries on the icon
    try {
      console.log('Object.entries result:', Object.entries(faHeart));
    } catch (error) {
      console.error('Error in Object.entries:', error);
    }
    
    // Test with iconMap
    const iconMap = { heart: faHeart };
    console.log('iconMap:', iconMap);
    console.log('iconMap entries:', Object.entries(iconMap));
    console.log('iconMap[heart]:', iconMap.heart);
    
    // Test using an icon from the map
    try {
      const icon = iconMap.heart;
      console.log('Accessing icon from map:', icon);
      console.log('Object.entries on icon from map:', Object.entries(icon));
    } catch (error) {
      console.error('Error with icon from map:', error);
    }
    
  }, []);
  
  return <div>FontAwesome Debug Component (Check console)</div>;
}

export default IconDebug;