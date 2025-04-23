"use client";

// Simplest possible FontAwesome icon component for debugging SWC issues
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/pro-solid-svg-icons';
import * as stylex from '@stylexjs/stylex';

// Log that this module is being processed
console.log('SimpleIconTest.tsx is being processed');

// Log the imported FontAwesome objects to understand their structure
console.log('FontAwesomeIcon:', typeof FontAwesomeIcon, FontAwesomeIcon ? 'loaded' : 'not loaded');
console.log('faHeart:', typeof faHeart, faHeart ? 'loaded' : 'not loaded');

// Very simple styles with minimal StyleX usage
const styles = stylex.create({
  wrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  medium: {
    fontSize: '24px',
  },
  default: {
    color: 'black',
  }
});

// Very simple FontAwesome icon component
export function SimpleIconTest() {
  console.log('SimpleIconTest rendering');
  
  // Use only a single icon to simplify debugging
  return (
    <span 
      {...stylex.props(styles.wrapper, styles.medium, styles.default)}
      data-testid="simple-icon-test"
    >
      <FontAwesomeIcon icon={faHeart} />
    </span>
  );
}