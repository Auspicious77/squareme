import { COLORS, FONTS } from '../constants/theme';
import { Dimensions, Image, Platform, Text, View } from 'react-native';


 

interface EmptyState {
  title?: string;
  iconName?: any;
  description?: string;
  marginTop?: any
}
const { width, height } = Dimensions.get('window');
const guidelineWidth = Platform.isPad ? 560 : 360;

export const scale = (size: number): number => {
  return (width / guidelineWidth) * size;
};

export function Capitalize(string: string) {
  // if (!string) return null
  if (typeof string !== 'string' || string.length === 0) {
    return ''; // Return an empty string for invalid input
  }
  else
    return string.charAt(0).toUpperCase() + string.slice(1);
}




export const formattedAmountWithNaira = (amount: any) => {
  return amount
    ? "\u20A6" +
      Math.round(parseFloat(amount)) // Round to nearest naira
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',') // Add commas as thousands separators
    : "₦0.00";
}


export const formatDateString = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  const daySuffix = getDaySuffix(day);

  return `${day}${daySuffix} ${month}, ${year}`;
};

const getDaySuffix = (day: number): string => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

export const formatTime = (date: any) => {
  let hours = date?.getHours();
  const minutes = date?.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutesStr} ${ampm}`;
};





